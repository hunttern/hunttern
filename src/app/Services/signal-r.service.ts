import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { FormGroup } from '@angular/forms';
import { patternClass } from '../Patterns/Patterns.class';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  hubConnection: signalR.HubConnection;
  url: string = 'http://87.107.146.161:5000/TestHub';
  streams: any[] = [];
  chart: any;
  HarmonicPatterns: any; 
  constructor() {
     this._createSocket();
  }
  _createSocket() {
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl(this.url)
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
  subscribeOnStream(symbolInfo: any, resolution: any, onRealtimeCallback: any, subscribeUID: any, onResetCacheNeededCallback: any) {
    this.hubConnection.on("RealTime", (msg: any) => {
    let sData = msg      
    if (sData && sData.open) {
        
      let { open, close, low, high, openTime } = sData
      // Update data
      let lastSocketData = {
        time: new Date(openTime).valueOf(),
        close: parseFloat(close),
        open: parseFloat(open),
        high: parseFloat(high),
        low: parseFloat(low),
        // volume: parseFloat(Math.random() * 1000),
    }
      onRealtimeCallback({...lastSocketData})
      
      }
    });
  }
  OnClick(data: FormGroup){
    const form = data.value;
    const zigzag = form.zigzag;
    const error = form.error;
    const patterns: string[] = [];
    form.patterns.forEach((item: any) => {
      patterns.push(item.value);
    });
    this.chart = patternClass.chart;
    this.hubConnection.invoke('SetPatterns', {ShowZigZag: true, ShowPosition: false, ShowPrediction: false, ShowStatistic: false, ShowCandlePattern: false, PivotSensitivity: zigzag, HarmonicError: error, RisktoReward: 25, Patterns: patterns});
    this.hubConnection.on("ProccessCandles", (msg: any) => {
      this.HarmonicPatterns = msg.Found_Patterns.Harmonic_Patterns;
      if(this.chart){
        this.chart.removeAllShapes();
        this.drawShape();
        this.chart = undefined;
      }
    });
  }
  unsubscribeFromStream(subscriberUID: any) {
    try {
      let id = subscriberUID.split("_")[0]
      const obj = {
        method: "ReceiveMessage",
        params: [
          this.streams[id]
        ],
        id: 1
      }
      delete this.streams[id]
      // if (this.hubConnection.readyState === 1) {
      //     this.hubConnection.send(JSON.stringify(obj))
      // }
    }
    catch (e) {
      console.error(e)
    }
  }

  public drawShape(){
    const patterns = this.HarmonicPatterns;
    if(patterns.ABCD.length != 0){
      this.drawPatterns("ABCD",patterns.ABCD)
    }
    if(patterns.Bat.length != 0){
      this.drawPatterns("Bat",patterns.Bat)
    }
    if(patterns.AltBat.length != 0){
      this.drawPatterns("AltBat",patterns.AltBat)
    }
    if(patterns.Butterfly.length != 0){
      this.drawPatterns("Butterfly",patterns.Bat)
    }
    if(patterns.Cypher.length != 0){
      this.drawPatterns("Cypher",patterns.Cypher)
    }
    if(patterns.Crab.length != 0){
      this.drawPatterns("Crab",patterns.Crab)
    }
    if(patterns.DeepCrab.length != 0){
      this.drawPatterns("DeepCrab",patterns.DeepCrab)
    }
    if(patterns.Shark.length != 0){
      this.drawPatterns("Shark",patterns.Shark)
    }
    if(patterns.ThreeDrives.length != 0){
      this.drawPatterns("ThreeDrives",patterns.ThreeDrives)
    }
    if(patterns['5-0'].length != 0){
      this.drawPatterns("5-0",patterns['5-0'])
    }
  }
  drawPatterns(patternName: string, pattern: any[]){
    switch(patternName){
      case 'ABCD':
        this.drawABCD(pattern);
        return;
      case 'Bat':
        this.drawXABCD(pattern, patternName);
        return;
      case 'AltBat':
        this.drawXABCD(pattern, patternName);
        return;
      case 'Butterfly':
        this.drawXABCD(pattern, patternName);
        return;
      case 'Cypher':
        this.drawXABCD(pattern, patternName);
        return;
      case 'Crab':
        this.drawXABCD(pattern, patternName);
        return;
      case 'DeepCrab':
        this.drawXABCD(pattern, patternName);
        return;
      case 'Shark':
        this.drawXABCD(pattern, patternName);
        return;
      case 'ThreeDrives':
        this.drawXABCD(pattern, patternName);
        return;
      case 'five':
        this.drawXABCD(pattern, patternName);
        return;
    }
  }
  drawXABCD(pattern: any[], name: string){
    pattern.forEach(point => {
      const Aprice = point.Price[4];
      const Bprice = point.Price[3];
      const Cprice = point.Price[2];
      const Dprice = point.Price[1];
      const Eprice = point.Price[0];
      const Atime = (Date.parse(point.Time[4]) / 1000);
      const Btime = (Date.parse(point.Time[3]) / 1000);
      const Ctime = (Date.parse(point.Time[2]) / 1000);
      const Dtime = (Date.parse(point.Time[1]) / 1000);
      const Etime = (Date.parse(point.Time[0]) / 1000);
      this.chart.createMultipointShape([{ time: Atime, price: Aprice }, { time: Btime, price: Bprice }, { time: Ctime, price: Cprice }, { time: Dtime, price: Dprice }, { time: Etime, price: Eprice }],
        {
          shape: "xabcd_pattern",
          lock: true,
          disableSelection: true,
          disableSave: true,
          disableUndo: true
        });
        this.chart.createMultipointShape([{ time: Atime, price: Aprice }],
          {
            shape: "text",
            lock: true,
            disableSelection: false,
            disableSave: true,
            disableUndo: true,
            text: name
          })
    });
  }
  drawABCD(pattern: any[]){
    pattern.forEach(point => {
      const Aprice = point.Price[3];
      const Bprice = point.Price[2];
      const Cprice = point.Price[1];
      const Dprice = point.Price[0];
      const Atime = (Date.parse(point.Time[3]) / 1000);
      const Btime = (Date.parse(point.Time[2]) / 1000);
      const Ctime = (Date.parse(point.Time[1]) / 1000);
      const Dtime = (Date.parse(point.Time[0]) / 1000);
      this.chart.createMultipointShape([{ time: Atime, price: Aprice }, { time: Btime, price: Bprice }, { time: Ctime, price: Cprice }, { time: Dtime, price: Dprice }],
        {
          shape: "abcd_pattern",
          lock: false,
          disableSelection: false,
          disableSave: true,
          disableUndo: true
        });
        this.chart.createMultipointShape([{ time: Atime, price: Aprice }],
          {
            shape: "text",
            lock: true,
            disableSelection: true,
            disableSave: true,
            disableUndo: true,
            text: "ABCD"
          })
    });
  }
}
