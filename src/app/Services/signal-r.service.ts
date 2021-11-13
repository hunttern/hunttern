import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { FormGroup } from '@angular/forms';
import { patternClass } from '../Patterns/Patterns.class';
import { HarmonicService } from '../Patterns/Services/harmonic.service';
import { ZigzagService } from '../Patterns/Services/zigzag.service';
import { ReversalService } from '../Patterns/Services/reversal.service';
import { HarmoonicService } from '../Patterns/Services/Prediction/harmoonic.service';
@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  hubConnection: signalR.HubConnection;
  url: string = 'http://87.107.146.161:5000/TestHub';
  streams: any[] = [];

  constructor(private _drawHarmonic: HarmonicService, private _drawZigzag: ZigzagService, private _drawReversal: ReversalService, private _prediction: HarmoonicService) {}
  _createSocket(interval: string) {
    const userId: string = patternClass.userId;
    const symbol: string = patternClass.Symbol;
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl(this.url+`?uniqeId=${userId}&coin=${symbol}${interval}M`)
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
    let sData = msg      
    if (sData && sData.open) {
        
      let { open, close, low, high, openTime } = sData
      let lastSocketData = {
        time: new Date(openTime).valueOf(),
        close: parseFloat(close),
        open: parseFloat(open),
        high: parseFloat(high),
        low: parseFloat(low),
    }
      onRealtimeCallback({...lastSocketData})
      
      }
    });
  }
  OnClick(data: FormGroup){
    const form = data.value;
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

    this.hubConnection.invoke('SetPatterns', {ShowZigZag: showZigZag, ShowPosition: false, ShowPrediction: prediction, ShowStatistic: false, ShowCandlePattern: false, PivotSensitivity: zigzag, HarmonicError: error, RisktoReward: 25, Patterns: patterns});
    
    this.hubConnection.on("ProccessCandles", (msg: any) => {
      if(!prediction){
        this._drawHarmonic.harmonicPattern = msg.Found_Patterns.Harmonic_Patterns;
        this._drawHarmonic.drawPatterns(patterns);
        this._drawReversal.reversalPattern = msg.Found_Patterns.Reversal_Patterns;
        this._drawReversal.drawPatterns(patterns);
      }
      if(showZigZag){
        this._drawZigzag.zigzag = msg.ZigZag;
        this._drawZigzag.drawZigzag();
      }
      if(prediction){
        this._prediction.harmonicPattern = msg.Prediction.Harmonic_Patterns;
        this._prediction.drawPatterns(patterns);
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
