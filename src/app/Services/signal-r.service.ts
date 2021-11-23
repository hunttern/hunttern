import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { FormGroup } from '@angular/forms';
import { patternClass } from '../Patterns/Patterns.class';
import { HarmonicService } from '../Patterns/Services/harmonic.service';
import { ZigzagService } from '../Patterns/Services/zigzag.service';
import { ReversalService } from '../Patterns/Services/reversal.service';
import { HarmoonicService } from '../Patterns/Services/Prediction/harmoonic.service';
import { PositionService } from '../Patterns/Services/Position/position.service';
@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  hubConnection: signalR.HubConnection;
  url: string = 'http://195.248.243.186:5000/TestHub';
  streams: any[] = [];

  private _inputs: any;
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
  OnClick(data: FormGroup){
    const form = data.value;
    this._inputs = form;
    const zigzag = form.zigzag;
    const prediction = form.prediction;
    const showZigZag = form.zigzagdraw;
    const error = form.error;
    const patterns: string[] = [];
    
    if(form.patterns.length > 0){
      form.patterns.forEach((item: any) => {
        patterns.push(item.value);
      });
    }
    this._drawHarmonic.chart = patternClass.chart;
    this._drawZigzag.chart = patternClass.chart;
    this._drawReversal.chart = patternClass.chart;
    this._prediction.chart = patternClass.chart;
    this._drawPosition.chart = patternClass.chart;

    this.hubConnection.invoke('SetPatterns', {ShowZigZag: showZigZag, ShowPosition: false, ShowPrediction: prediction, ShowStatistic: false, ShowCandlePattern: false, PivotSensitivity: zigzag, HarmonicError: error, RisktoReward: 25, Patterns: patterns});
    
    this.hubConnection.on("ProccessCandles", (msg: any) => {
      
      this._drawHarmonic.harmonicPattern = msg.Found_Patterns.Harmonic_Patterns;
      this._drawHarmonic.drawPatterns(patterns);
      this._drawReversal.reversalPattern = msg.Found_Patterns.Reversal_Patterns;
      this._drawReversal.drawPatterns(patterns);
      this._drawPosition.position = msg.Position.Harmonic_Patterns;
      this._drawPosition.drawPosition();

      if(showZigZag){
        this._drawZigzag.zigzag = msg.ZigZag;
        this._drawZigzag.drawZigzag();
      }else{
        this._drawZigzag.removeZigzag();
      }

      if(prediction){
        this._prediction.harmonicPattern = msg.Prediction.Harmonic_Patterns;
        this._prediction.drawPatterns(patterns);
      }else{
        this._prediction.removePatterns();
      }
    });
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
}
