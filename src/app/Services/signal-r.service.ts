import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { patternClass } from '../Patterns/Patterns.class';
import { HarmonicService } from '../Patterns/Services/harmonic.service';
import { ZigzagService } from '../Patterns/Services/zigzag.service';
import { ReversalService } from '../Patterns/Services/reversal.service';
import { HarmoonicService } from '../Patterns/Services/Prediction/harmoonic.service';
import { PositionService } from '../Patterns/Services/Position/position.service';
import { BehaviorSubject } from 'rxjs';

interface Ipatterns{
  harmonic: any;
  classic: any;
  candle: any;
  zigzag: {active: boolean, value: number};
  prediction: boolean;
  error: number;
}

@Injectable({
  providedIn: 'root'
})
export class SignalRService {

  public static loading$ = new BehaviorSubject<boolean>(false);


  hubConnection: signalR.HubConnection;
  url: string = 'http://195.248.243.186:5000/TestHub';
  streams: any[] = [];

  private _inputs: Ipatterns;
  private _harmonicpatterns: string[] = [];
  private _classicpatterns: string[] = [];
  private _candlepatterns: string[] = [];

  constructor(private _drawHarmonic: HarmonicService, private _drawZigzag: ZigzagService,
     private _drawReversal: ReversalService, private _prediction: HarmoonicService,
     private _drawPosition: PositionService
     ) {}
  _createSocket(interval: string) {
    const userId: string = patternClass.userId;
    const symbol: string = patternClass.Symbol;
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl(this.url+`?uniqeId=${userId}&coin=${symbol}${interval}`)
    .build();
    
    this.hubConnection
    .start()
    .then(() => {
      localStorage.setItem("wsStatus", '1')
      if(this._inputs)
      this.OnClick(this._inputs);
    })
    .catch((err: any) => {
      return console.error(err.toString());
    })
  }
  subscribeOnStream(symbolInfo: any, resolution: any, onRealtimeCallback: any, subscribeUID: any, onResetCacheNeededCallback: any, interval: string) {
    this._createSocket(interval);
    this.hubConnection.on("RealTime", (msg: any) => {
    let sData = msg;
    
    if (sData && sData.Open) {
        
      let lastCandle: { Open: any,  OpenTime: any, Close: any, CloseTime: any, High: any, Low: any } = sData;

      let lastSocketData = {
        time: new Date(lastCandle.OpenTime).valueOf(),
        close: parseFloat(lastCandle.Close),
        open: parseFloat(lastCandle.Open),
        high: parseFloat(lastCandle.High),
        low: parseFloat(lastCandle.Low),
      }
      onRealtimeCallback({...lastSocketData})
      }
    });
  }
  OnClick(data: Ipatterns): void{
    const harmonicpatterns: string[] = [];
    const classicpatterns: string[] = [];
    const candlepatterns: string[] = [];
    if(data.harmonic !== null){
      const harmonicForm = data.harmonic.value;
      if(harmonicForm.patterns.length > 0){
        harmonicForm.patterns.forEach((item: any) => {
          harmonicpatterns.push(item.value);
        });
        this._harmonicpatterns = harmonicpatterns;
      }
    }
    if(data.classic !== null){
      const classicForm = data.classic.value;
      if(classicForm.patterns.length > 0){
        classicForm.patterns.forEach((item: any) => {
          classicpatterns.push(item.value);
        });
        this._classicpatterns = classicpatterns;
      }
    }
    if(data.candle !== null){
      const candleForm = data.candle.value;
      if(candleForm.patterns.length > 0){
        candleForm.patterns.forEach((item: any) => {
          candlepatterns.push(item.value);
        });
        this._candlepatterns = candlepatterns;
      }
    }
    this._inputs = data;
    const showZigZag = data.zigzag.active;
    const zigzag = data.zigzag.value;
    const prediction = data.prediction;
    const error = data.error;
    
    
    
    
    

    this.draw(showZigZag,prediction,zigzag,error,{harmonic: harmonicpatterns,classic: classicpatterns,candle: candlepatterns});
  }
  unsubscribeFromStream(subscriberUID?: any) {
    this.hubConnection.stop();
    // const oldCoin: string = '';
    // const newCoin: string = '';

    // this.hubConnection.invoke('ChangeCoin', {old: oldCoin, newCoin: newCoin});

    // try {
    //   let id = subscriberUID.split("_")[0]
    //   const obj = {
    //     method: "ReceiveMessage",
    //     params: [
    //       this.streams[id]
    //     ],
    //     id: 1
    //   }
    //   delete this.streams[id]
    //   // if (this.hubConnection.readyState === 1) {
    //   //     this.hubConnection.send(JSON.stringify(obj))
    //   // }
    // }
    // catch (e) {
    //   console.error(e)
    // }
  }
  defaultDraw(form: any){
    const zigzag = form.zigzag;
    const prediction = form.prediction;
    const showZigZag = form.zigzagdraw;
    const error = form.error;
    this.draw(showZigZag,prediction,zigzag,error,{harmonic: this._harmonicpatterns,classic: this._classicpatterns,candle: this._candlepatterns});
  }
  private draw(showZigZag: boolean, prediction: boolean,zigzag: number, error: number, patterns: {harmonic: string[],classic: string[],candle: string[]}){
    this._drawHarmonic.chart = patternClass.chart;
    this._drawZigzag.chart = patternClass.chart;
    this._drawReversal.chart = patternClass.chart;
    this._prediction.chart = patternClass.chart;
    this._drawPosition.chart = patternClass.chart;
    const allpattern = patterns.harmonic.concat(patterns.classic.concat(patterns.candle));

    this.hubConnection.invoke('SetPatterns', {ShowZigZag: showZigZag, ShowPosition: true, ShowPrediction: prediction, ShowStatistic: false, ShowCandlePattern: true, PivotSensitivity: zigzag, HarmonicError: error, RisktoReward: 25, Patterns: allpattern});
    
    this.hubConnection.on("ProccessCandles", (msg: any) => {
      this._drawHarmonic.harmonicPattern = msg.Found_Patterns.Harmonic_Patterns;
      this._drawHarmonic.drawPatterns(patterns.harmonic);
      this._drawReversal.reversalPattern = msg.Found_Patterns.Reversal_Patterns;
      this._drawReversal.drawPatterns(patterns.classic);
      this._drawPosition.position = msg.Position.Harmonic_Patterns;
      this._drawPosition.drawLines(allpattern);

      if(showZigZag){
        this._drawZigzag.zigzag = msg.ZigZag;
        this._drawZigzag.drawZigzag();
      }else{
        this._drawZigzag.removeZigzag();
      }

      if(prediction){
        this._prediction.harmonicPattern = msg.Prediction.Harmonic_Patterns;
        this._prediction.drawPatterns(allpattern);
      }else{
        this._prediction.removePatterns();
      }
      // SignalRService.loading$.next(false);
    });
  }
}
