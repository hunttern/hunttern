import { Injectable } from '@angular/core';
import { EntityId } from 'src/assets/charting_library/charting_library';
import { Harmonic } from '../../Interfaces/harmonic';
import { Pattern } from '../../Interfaces/pattern';

@Injectable({
  providedIn: 'root'
})
export class HarmoonicService {
  private _harmonicPattern: Harmonic;

  private _harmonicID: [{label: EntityId, pattern: EntityId}] = [{label:'' as EntityId,pattern:'' as EntityId}];
  private _chart: any;

  private _abcd: Pattern[];
  private _bat: Pattern[];
  private _altbat: Pattern[];
  private _butterfly: Pattern[];
  private _cypher: Pattern[];
  private _crab: Pattern[];
  private _deepcrab: Pattern[];
  private _shark: Pattern[];
  private _threedrives: Pattern[];
  private _gartley: Pattern[];
  private _5_0: Pattern[];

  private delay: number = 1800000000;
  set chart(chart: any){
    this._chart = chart;
  }
  set harmonicPattern(patterns: Harmonic){
    this._harmonicPattern = patterns;
  }

  drawPatterns(patterns: string[]){
    this.removePatterns()
    this.split();
    patterns.forEach(patternName => {
      switch (patternName){
        case 'ABCD' :{
          if(this._abcd.length > 0){
            this.drawABCD(this._abcd);
          }
        }
        break;
        case 'Bat' :{
          if(this._bat.length > 0)
          this.drawXABCD(this._bat, 'Bat');
        }
        break;
        case 'AltBat' :{
          if(this._altbat.length > 0)
          this.drawXABCD(this._altbat, 'Alt Bat');
        }
        break;
        case 'Butterfly' :{
          if(this._butterfly.length > 0)
          this.drawXABCD(this._butterfly, 'Butterfly');
        }
        break;
        case '5-0' :
          if(this._5_0.length > 0){
            this.drawXABCD(this._5_0, '5-0');
          }
        break;
        case 'Gartley' :
          if(this._gartley.length > 0){
            this.drawXABCD(this._gartley, 'Gartley');
          }
        break;
        case 'ThreeDrives' :
          if(this._threedrives.length > 0){
            this.drawThreeDrive(this._threedrives);
          }
        break;
        case 'Cypher' :
          if(this._cypher.length > 0)
          this.drawXABCD(this._cypher, 'Cypher');
        break;
        case 'Crab' :
          if(this._crab.length > 0)
          this.drawXABCD(this._crab, 'Crab');
        break;
        case 'DeepCrab' : 
          if(this._deepcrab.length > 0)
          this.drawXABCD(this._deepcrab, 'DeepCrab');
        break;
        case 'Shark' : 
          if(this._shark.length > 0)
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
  private removePatterns(){
    if(this._harmonicID.length > 2){
        this._harmonicID.forEach(id => {
        this._chart.removeEntity(id.label);
        this._chart.removeEntity(id.pattern);
      });
      this._harmonicID = [{label: '' as EntityId,pattern: '' as EntityId}];
    }
  }

  private drawThreeDrive(patterns: any){
    const pattern = patterns[0];
    console.log(pattern);
    const P1 = pattern.LastPatternPoint[0];
    const P2 = pattern.LastPatternPoint[1];
    const Aprice = (P1 + P2)/2;
    const Bprice = pattern.Price[5];
    const Cprice = pattern.Price[4];
    const Dprice = pattern.Price[3];
    const Eprice = pattern.Price[2];
    const Fprice = pattern.Price[1];
    const Gprice = pattern.Price[0];
    const Btime = (Date.parse(pattern.Time[5]) / 1000);
    const Atime = Btime + this.delay;
    const Ctime = (Date.parse(pattern.Time[4]) / 1000);
    const Dtime = (Date.parse(pattern.Time[3]) / 1000);
    const Etime = (Date.parse(pattern.Time[2]) / 1000);
    const Ftime = (Date.parse(pattern.Time[1]) / 1000);
    const Gtime = (Date.parse(pattern.Time[0]) / 1000);
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
      const line1ID = this._chart.createMultipointShape([{time: Atime, price: P1}],
        {
          shape: "horizontal_line",
          lock: false,
          disableSelection: true,
          disableSave: true,
          disableUndo: true,
          linecolor: '#ffff00'
        });
      const line2ID = this._chart.createMultipointShape([{time: Atime, price: P2}],
        {
          shape: "horizontal_line",
          lock: false,
          disableSelection: true,
          disableSave: true,
          disableUndo: true,
          linecolor: '#ffff00'
        });
      this._harmonicID.push({label: labelID, pattern: shapeID});
      this._harmonicID.push({label: line1ID, pattern: line2ID});
  }
  private drawABCD(abcdPattern: Pattern[]){
    const pattern = abcdPattern[0];
    console.log(pattern);
    const P1 = pattern.LastPatternPoint[0];
    const P2 = pattern.LastPatternPoint[1];
    const Aprice = (P1+P2) / 2;
    const Bprice = pattern.Price[2];
    const Cprice = pattern.Price[1];
    const Dprice = pattern.Price[0];
    const Btime = (Date.parse(pattern.Time[2]) / 1000);
    const Atime = Btime + this.delay;
    const Ctime = (Date.parse(pattern.Time[1]) / 1000);
    const Dtime = (Date.parse(pattern.Time[0]) / 1000);

    const patternID = this._chart.createMultipointShape([{ time: Atime, price: Aprice }, { time: Btime, price: Bprice }, { time: Ctime, price: Cprice }, { time: Dtime, price: Dprice }],
      {
        shape: "abcd_pattern",
        lock: false,
        disableSelection: false,
        disableSave: true,
        disableUndo: true
      });
    const labelID = this._chart.createMultipointShape([{ time: Atime, price: Aprice }],
      {
        shape: "text",
        lock: true,
        disableSelection: true,
        disableSave: true,
        disableUndo: true,
        text: "ABCD"
      });
    const line1ID = this._chart.createMultipointShape([{time: Atime, price: P1}],
      {
        shape: "horizontal_line",
        lock: false,
        disableSelection: true,
        disableSave: true,
        disableUndo: true,
        linecolor: '#ffff00'
      });
    const line2ID = this._chart.createMultipointShape([{time: Atime, price: P2}],
      {
        shape: "horizontal_line",
        lock: false,
        disableSelection: true,
        disableSave: true,
        disableUndo: true,
        linecolor: '#ffff00'
      });
    this._harmonicID.push({label: labelID, pattern: patternID});
    this._harmonicID.push({label: line1ID, pattern: line2ID});
  }
  private drawXABCD(patterns: Pattern[], name: string){
    const pattern = patterns[0];
    console.log(pattern);
    const P1 = pattern.LastPatternPoint[0];
    const P2 = pattern.LastPatternPoint[1];
    const Aprice = (P1 + P2) / 2;
    const Bprice = pattern.Price[3];
    const Cprice = pattern.Price[2];
    const Dprice = pattern.Price[1];
    const Eprice = pattern.Price[0];
    const Btime = (Date.parse(pattern.Time[3]) / 1000);
    const Atime = Btime + this.delay;
    const Ctime = (Date.parse(pattern.Time[2]) / 1000);
    const Dtime = (Date.parse(pattern.Time[1]) / 1000);
    const Etime = (Date.parse(pattern.Time[0]) / 1000);
    
    const patternID = this._chart.createMultipointShape([{ time: Atime, price: Aprice }, { time: Btime, price: Bprice }, { time: Ctime, price: Cprice }, { time: Dtime, price: Dprice }, { time: Etime, price: Eprice }],
      {
        shape: "xabcd_pattern",
        lock: true,
        disableSelection: true,
        disableSave: true,
        disableUndo: true
      });
    const labelID = this._chart.createMultipointShape([{ time: Atime, price: Aprice }],
      {
        shape: "text",
        lock: true,
        disableSelection: false,
        disableSave: true,
        disableUndo: true,
        text: name
      });
      const line1ID = this._chart.createMultipointShape([{time: Atime, price: P1}],
        {
          shape: "horizontal_line",
          lock: false,
          disableSelection: true,
          disableSave: true,
          disableUndo: true,
          linecolor: '#ffff00'
        });
      const line2ID = this._chart.createMultipointShape([{time: Atime, price: P2}],
        {
          shape: "horizontal_line",
          lock: false,
          disableSelection: true,
          disableSave: true,
          disableUndo: true,
          linecolor: '#ffff00'
        });
      this._harmonicID.push({label: labelID, pattern: patternID});
      this._harmonicID.push({label: line1ID, pattern: line2ID});
  }
}
