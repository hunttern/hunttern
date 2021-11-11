import { Injectable } from '@angular/core';
import { EntityId } from 'src/assets/charting_library/charting_library';
import { Harmonic } from '../Interfaces/harmonic';

@Injectable({
  providedIn: 'root'
})

export class HarmonicService {

  private _harmonicPattern: Harmonic;

  private _harmonicID: [{label: EntityId, pattern: EntityId}] = [{label:'' as EntityId,pattern:'' as EntityId}];
  private _chart: any;

  private _abcd: any[];
  private _bat: any[];
  private _altbat: any[];
  private _butterfly: any[];
  private _cypher: any[];
  private _crab: any[];
  private _deepcrab: any[];
  private _shark: any[];
  private _threedrives: any[];
  private _gartley: any[];
  private _5_0: any[];

  set chart(chart: any){
    this._chart = chart;
  }
  set harmonicPattern(patterns: any){
    this._harmonicPattern = patterns;
  }

  drawPatterns(patterns: string[]){
    this.removePatterns()
    this.split();
    patterns.forEach(patternName => {
      switch (patternName){
        case 'ABCD' : 
          this.drawABCD(this._abcd);
        break;
        case 'Bat' : 
          this.drawXABCD(this._bat, 'Bat');
        break;
        case 'AltBat' : 
          this.drawXABCD(this._altbat, 'Alt Bat');
        break;
        case 'Butterfly' : 
          this.drawXABCD(this._butterfly, 'Butterfly');
        break;
        case '5-0' : 
          this.drawXABCD(this._5_0, '5-0');
        break;
        case 'Gartley' : 
          this.drawXABCD(this._gartley, 'Gartley');
        break;
        case 'ThreeDrives' : 
          this.drawThreeDrive(this._threedrives);
        break;
        case 'Cypher' : 
          this.drawXABCD(this._cypher, 'Cypher');
        break;
        case 'Crab' : 
          this.drawXABCD(this._crab, 'Crab');
        break;
        case 'DeepCrab' : 
          this.drawXABCD(this._deepcrab, 'DeepCrab');
        break;
        case 'Shark' : 
          this.drawXABCD(this._shark, 'Shark');
        break;
      }
    });
  }
  private split(){
    this._abcd = this._harmonicPattern.ABCD;
    this._bat = this._harmonicPattern.Bat;
    this._altbat = this._harmonicPattern.AltBat;
    this._butterfly = this._harmonicPattern.Butterfly;
    this._cypher = this._harmonicPattern.Cypher;
    this._crab = this._harmonicPattern.Crab;
    this._deepcrab = this._harmonicPattern.DeepCrab;
    this._shark = this._harmonicPattern.Shark;
    this._threedrives = this._harmonicPattern.ThreeDrives;
    this._gartley = this._harmonicPattern.Gartley;
    this._5_0 = this._harmonicPattern["5-0"];
  }
  private drawThreeDrive(pattern: any){
    pattern.forEach((point: any) => {
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
      const shapeID = this._chart.createMultipointShape([{ time: Atime, price: Aprice }, { time: Btime, price: Bprice }, { time: Ctime, price: Cprice }, { time: Dtime, price: Dprice }, { time: Etime, price: Eprice }, { time: Ftime, price: Fprice }, { time: Gtime, price: Gprice },],
        {
          shape: "3divers_pattern",
          lock: true,
          disableSelection: true,
          disableSave: true,
          disableUndo: true
        });
        const labelID = this._chart.createMultipointShape([{ time: Gtime, price: Gprice }],
          {
            shape: "text",
            lock: true,
            disableSelection: false,
            disableSave: true,
            disableUndo: true,
            text: "Three Drives"
          });
        this._harmonicID.push({label: labelID, pattern: shapeID});
    });
  }
  private drawABCD(abcdPattern: any[]){
    abcdPattern.forEach(point => {
      let labelID: EntityId;
      let patternID: EntityId;
      const Aprice = point.Price[3];
      const Bprice = point.Price[2];
      const Cprice = point.Price[1];
      const Dprice = point.Price[0];
      const Atime = (Date.parse(point.Time[3]) / 1000);
      const Btime = (Date.parse(point.Time[2]) / 1000);
      const Ctime = (Date.parse(point.Time[1]) / 1000);
      const Dtime = (Date.parse(point.Time[0]) / 1000);
      patternID = this._chart.createMultipointShape([{ time: Atime, price: Aprice }, { time: Btime, price: Bprice }, { time: Ctime, price: Cprice }, { time: Dtime, price: Dprice }],
        {
          shape: "abcd_pattern",
          lock: false,
          disableSelection: false,
          disableSave: true,
          disableUndo: true
        });
      labelID = this._chart.createMultipointShape([{ time: Atime, price: Aprice }],
        {
          shape: "text",
          lock: true,
          disableSelection: true,
          disableSave: true,
          disableUndo: true,
          text: "ABCD"
        })
        this._harmonicID.push({label: labelID, pattern: patternID});
    });
  }
  private drawXABCD(pattern: any[], name: string){
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
      const patternID = this._chart.createMultipointShape([{ time: Atime, price: Aprice }, { time: Btime, price: Bprice }, { time: Ctime, price: Cprice }, { time: Dtime, price: Dprice }, { time: Etime, price: Eprice }],
        {
          shape: "xabcd_pattern",
          lock: true,
          disableSelection: true,
          disableSave: true,
          disableUndo: true
        });
        labelID = this._chart.createMultipointShape([{ time: Atime, price: Aprice }],
          {
            shape: "text",
            lock: true,
            disableSelection: false,
            disableSave: true,
            disableUndo: true,
            text: name
          })
          this._harmonicID.push({label: labelID, pattern: patternID});
    });
  }
  private removePatterns(){
    if(this._harmonicID.length > 1){
        this._harmonicID.forEach(id => {
        this._chart.removeEntity(id.label);
        this._chart.removeEntity(id.pattern);
      });
      this._harmonicID = [{label: '' as EntityId,pattern: '' as EntityId}];
    }
  }
}
