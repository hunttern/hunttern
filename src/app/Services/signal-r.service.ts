import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
import { FormGroup } from '@angular/forms';
import { patternClass } from '../Patterns/Patterns.class';
import { EntityId } from 'src/scripts/charting_library/charting_library';
@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  hubConnection: signalR.HubConnection;
  url: string = 'http://87.107.146.161:5000/TestHub';
  streams: any[] = [];
  chart: any;
  HarmonicPatterns: any;
  ReversalPatterns: any;
  harmonicShape: [{shape: EntityId | string, label: EntityId | string}] = [{label: '',shape: ''}];
  reversalShape: [{shape: EntityId | string, label?: EntityId | string}] = [{label: '',shape: ''}];
  zigzagShape: EntityId[] = [];
  draw: boolean = true;
  constructor() {
    // this._createSocket();
  }
  _createSocket() {
    const userId: string = patternClass.userId;
    const symbol: string = patternClass.Symbol;
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl(this.url+`?uniqeId=${userId}&coin=${symbol}`)
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
    this._createSocket();
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
    this.draw = true;
    if(form.patterns.length > 0){
      form.patterns.forEach((item: any) => {
        patterns.push(item.value);
      });
    }
    this.chart = patternClass.chart;
    this.hubConnection.invoke('SetPatterns', {ShowZigZag: showZigZag, ShowPosition: false, ShowPrediction: false, ShowStatistic: false, ShowCandlePattern: false, PivotSensitivity: zigzag, HarmonicError: error, RisktoReward: 25, Patterns: patterns});
    this.hubConnection.on("ProccessCandles", (msg: any) => {
      this.HarmonicPatterns = msg.Found_Patterns.Harmonic_Patterns;
      this.ReversalPatterns = msg.Found_Patterns.Reversal_Patterns;
      if(this.chart && showZigZag){
        this.drawZigzag(msg.ZigZag);
      }
      if(this.chart && this.draw){
        this.chart.removeAllShapes();
        this.drawShape();
        this.drawReversalShape();
        this.draw = false;
      }
    });
  }
  unsubscribeFromStream(subscriberUID?: any) {
    this.hubConnection.stop();
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
  drawZigzag(zigzag: any){
    this.removeZigzag();
    let zigzagID: EntityId;
    let prevtime = Date.parse(zigzag[0][0]);
    let prevprice = zigzag[0][1];
    // for(let i=this.zigzag.length-1; i > 0; i--){
    //   let time = (Date.parse(this.zigzag[i][0]) / 1000);
    //   let price = 
    // }
    zigzag.forEach((point:any, index: number) => {
      let time = (Date.parse(point[0]) / 1000);
      let price = point[1];
      let color;
      if(index > 0){
        color = price < prevprice ? "#ff0000" : "#00ff00";
        zigzagID = this.chart.createMultipointShape([{ time: prevtime, price: prevprice }, { time: time, price: price }],
          {
            shape: "trend_line",
            lock: true,
            disableSelection: false,
            disableSave: true,
            disableUndo: true,
            overrides: {
              bold: true,
              linewidth: 3,
              linestyle: 0,
              linecolor: color
            }
          });
        this.zigzagShape.push(zigzagID);
        prevprice = price;
        prevtime = time;
      }
    });
  }
  removeZigzag(){
    if(this.zigzagShape.length > 0){
      this.zigzagShape.forEach(zigzag => {
        this.chart.removeEntity(zigzag);
      });
      this.zigzagShape = [];
    }
  }
  private drawReversalShape(){
    const patterns = this.ReversalPatterns;
    if(patterns.Head_and_Shoulders.length != 0){
      this.drawPatterns("HeadandShoulders",patterns.Head_and_Shoulders)
    }
    if(patterns.Double.length != 0){
      this.drawPatterns("Double",patterns.Double)
    }
    if(patterns.Triple.length != 0){
      this.drawPatterns("Triple",patterns.Triple)
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
        this.drawTriple(pattern);
        return;
      case 'five':
        this.drawXABCD(pattern, patternName);
        return;
      case 'headandShoulders':
        this.drawHeadandShoulders(pattern);
        return;
        case 'Double':
        this.drawDouble(pattern);
        return;
      case 'Triple':
        this.drawHeadandShoulders(pattern);
        return;
    }
  }
  drawTriple(pattern: any[]){
    pattern.forEach(point => {
      const Aprice = point.Price[6];
      const Bprice = point.Price[5];
      const Cprice = point.Price[4];
      const Dprice = point.Price[3];
      const Eprice = point.Price[2];
      const Fprice = point.Price[1];
      const Gprice = point.Price[0];
      const Atime = (Date.parse(point.Time[6]) / 1000);
      const Btime = (Date.parse(point.Time[5]) / 1000);
      const Ctime = (Date.parse(point.Time[4]) / 1000);
      const Dtime = (Date.parse(point.Time[3]) / 1000);
      const Etime = (Date.parse(point.Time[2]) / 1000);
      const Ftime = (Date.parse(point.Time[1]) / 1000);
      const Gtime = (Date.parse(point.Time[0]) / 1000);
      const shapeID = this.chart.createMultipointShape([{ time: Atime, price: Aprice }, { time: Btime, price: Bprice }, { time: Ctime, price: Cprice }, { time: Dtime, price: Dprice }, { time: Etime, price: Eprice }, { time: Ftime, price: Fprice }, { time: Gtime, price: Gprice },],
        {
          shape: "3divers_pattern",
          lock: true,
          disableSelection: true,
          disableSave: true,
          disableUndo: true
        });
        this.harmonicShape.push({label: '', shape: shapeID});
    })
  }
  private drawDouble(pattern: any){
    pattern.forEach((point: any) => {
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
      
      let m = (Aprice - Bprice) / (Atime - Btime);
      const midAB = ((Cprice - Aprice) / m) + Atime;
      m = (Dprice - Eprice) / (Dtime - Etime);
      const midDE = ((Cprice - Dprice) / m) + Dtime;

      const shape1ID = this.chart.createMultipointShape([{ time: midAB, price: Cprice }, { time: Btime, price: Bprice }, { time: Ctime, price: Cprice }],
        {
          shape: "triangle",
          lock: true,
          disableSelection: true,
          disableSave: true,
          disableUndo: true
        });
      const shape2ID = this.chart.createMultipointShape([{ time: Ctime, price: Cprice }, { time: Dtime, price: Dprice }, { time: midDE, price: Cprice }],
        {
          shape: "triangle",
          lock: true,
          disableSelection: true,
          disableSave: true,
          disableUndo: true
        });
        this.reversalShape.push({label: '', shape: shape1ID});
        this.reversalShape.push({label: '', shape: shape2ID});
    })
  }
  drawHeadandShoulders(pattern: any[]){
    pattern.forEach(point => {
      const Aprice = point.Price[6];
      const Bprice = point.Price[5];
      const Cprice = point.Price[4];
      const Dprice = point.Price[3];
      const Eprice = point.Price[2];
      const Fprice = point.Price[1];
      const Gprice = point.Price[0];
      const Atime = (Date.parse(point.Time[6]) / 1000);
      const Btime = (Date.parse(point.Time[5]) / 1000);
      const Ctime = (Date.parse(point.Time[4]) / 1000);
      const Dtime = (Date.parse(point.Time[3]) / 1000);
      const Etime = (Date.parse(point.Time[2]) / 1000);
      const Ftime = (Date.parse(point.Time[1]) / 1000);
      const Gtime = (Date.parse(point.Time[0]) / 1000);
      const shapeID = this.chart.createMultipointShape([{ time: Atime, price: Aprice }, { time: Btime, price: Bprice }, { time: Ctime, price: Cprice }, { time: Dtime, price: Dprice }, { time: Etime, price: Eprice }, { time: Ftime, price: Fprice }, { time: Gtime, price: Gprice },],
        {
          shape: "head_and_shoulders",
          lock: true,
          disableSelection: true,
          disableSave: true,
          disableUndo: true
        });
        this.reversalShape.push({label: '', shape: shapeID});
    })
  }
  drawXABCD(pattern: any[], name: string){
    pattern.forEach(point => {
      let labelID: EntityId;
      let shapeID: EntityId;
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
       shapeID = this.chart.createMultipointShape([{ time: Atime, price: Aprice }, { time: Btime, price: Bprice }, { time: Ctime, price: Cprice }, { time: Dtime, price: Dprice }, { time: Etime, price: Eprice }],
        {
          shape: "xabcd_pattern",
          lock: true,
          disableSelection: true,
          disableSave: true,
          disableUndo: true
        });
        labelID = this.chart.createMultipointShape([{ time: Atime, price: Aprice }],
          {
            shape: "text",
            lock: true,
            disableSelection: false,
            disableSave: true,
            disableUndo: true,
            text: name
          })
          this.harmonicShape.push({label: labelID, shape: shapeID});
    });
  }
  drawABCD(pattern: any[]){
    pattern.forEach(point => {
      let labelID: EntityId;
      let shapeID: EntityId;
      const Aprice = point.Price[3];
      const Bprice = point.Price[2];
      const Cprice = point.Price[1];
      const Dprice = point.Price[0];
      const Atime = (Date.parse(point.Time[3]) / 1000);
      const Btime = (Date.parse(point.Time[2]) / 1000);
      const Ctime = (Date.parse(point.Time[1]) / 1000);
      const Dtime = (Date.parse(point.Time[0]) / 1000);
      shapeID = this.chart.createMultipointShape([{ time: Atime, price: Aprice }, { time: Btime, price: Bprice }, { time: Ctime, price: Cprice }, { time: Dtime, price: Dprice }],
        {
          shape: "abcd_pattern",
          lock: false,
          disableSelection: false,
          disableSave: true,
          disableUndo: true
        });
      labelID = this.chart.createMultipointShape([{ time: Atime, price: Aprice }],
        {
          shape: "text",
          lock: true,
          disableSelection: true,
          disableSave: true,
          disableUndo: true,
          text: "ABCD"
        })
        this.harmonicShape.push({label: labelID, shape: shapeID});
    });
  }
}
