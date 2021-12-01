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
          this.drawXABCD(this._bat, 'Bat','#BCEBCB');
        }
        break;
        case 'AltBat' :{
          if(this._altbat.length > 0)
          this.drawXABCD(this._altbat, 'Alt Bat','#77A6B6');
        }
        break;
        case 'Butterfly' :{
          if(this._butterfly.length > 0)
          this.drawXABCD(this._butterfly, 'Butterfly','#D0EFB1');
        }
        break;
        case '5-0' :
          if(this._5_0.length > 0){
            this.drawXABCD(this._5_0, '5-0','#4D7298');
          }
        break;
        case 'Gartley' :
          if(this._gartley.length > 0){
            this.drawXABCD(this._gartley, 'Gartley','#9DC3C2');
          }
        break;
        case 'ThreeDrives' :
          if(this._threedrives.length > 0){
            this.drawThreeDrive(this._threedrives);
          }
        break;
        case 'Cypher' :
          if(this._cypher.length > 0)
          this.drawXABCD(this._cypher, 'Cypher', '#E8C7DE');
        break;
        case 'Crab' :
          if(this._crab.length > 0)
          this.drawXABCD(this._crab, 'Crab', '#CBBEB3');
        break;
        case 'DeepCrab' : 
          if(this._deepcrab.length > 0)
          this.drawXABCD(this._deepcrab, 'DeepCrab', '#FF715B');
        break;
        case 'Shark' : 
          if(this._shark.length > 0)
          this.drawXABCD(this._shark, 'Shark', '#F9CB40');
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
  removePatterns(){
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
    const P1 = pattern.LastPatternPoint[0];
    const P2 = pattern.LastPatternPoint[1];
    const Aprice = (P1 + P2)/2;
    const Btime = (Date.parse(pattern.Time[5]) / 1000);
    const Atime = Btime + this.delay;
    if(pattern.Status[0] === "completing"){
      const labelID = this._chart.createMultipointShape([{ time: Atime, price: Aprice },{ time: Atime, price: Aprice }],
        {
          shape: "callout",
          lock: true,
          disableSelection: false,
          disableSave: true,
          disableUndo: true,
          text: "Three Drives",
          overrides:{
            fontsize: 12
          }
        });
        const line1ID = this._chart.createMultipointShape([{time: Atime, price: P1}],
          {
            shape: "horizontal_line",
            lock: true,
            disableSelection: true,
            disableSave: true,
            disableUndo: true,
            overrides: {
              linestyle: 2,
              linecolor: '#B5FED9'
            }
          });
        const line2ID = this._chart.createMultipointShape([{time: Atime, price: P2}],
          {
            shape: "horizontal_line",
            lock: true,
            disableSelection: true,
            disableSave: true,
            disableUndo: true,
            overrides: {
              linestyle: 2,
              linecolor: '#B5FED9'
            }
          });
        this._harmonicID.push({label: labelID, pattern: '' as EntityId});
        this._harmonicID.push({label: line1ID, pattern: line2ID});
    }
  }
  private drawABCD(abcdPattern: Pattern[]){
    const pattern = abcdPattern[0];
    const P1 = pattern.LastPatternPoint[0];
    const P2 = pattern.LastPatternPoint[1];
    const Aprice = (P1+P2) / 2;
    const Btime = (Date.parse(pattern.Time[2]) / 1000);
    const Atime = Btime + this.delay;
    if(pattern.Status[0] === "completing"){
      const labelID = this._chart.createMultipointShape([{ time: Atime, price: Aprice }, { time: Atime, price: Aprice }],
        {
          shape: "callout",
          lock: true,
          disableSelection: true,
          disableSave: true,
          disableUndo: true,
          text: "ABCD",
          overrides:{
            fontsize: 12
          }
        });
      const line1ID = this._chart.createMultipointShape([{time: Atime, price: P1}],
        {
          shape: "horizontal_line",
          lock: true,
          disableSelection: true,
          disableSave: true,
          disableUndo: true,
          overrides: {
            linestyle: 2,
            linecolor: '#BCEBCB'
          }
        });
      const line2ID = this._chart.createMultipointShape([{time: Atime, price: P2}],
        {
          shape: "horizontal_line",
          lock: true,
          disableSelection: true,
          disableSave: true,
          disableUndo: true,
          overrides: {
            linestyle: 2,
            linecolor: '#BCEBCB'
          }
        });
      this._harmonicID.push({label: labelID, pattern: '' as EntityId});
      this._harmonicID.push({label: line1ID, pattern: line2ID});
    }
  }
  private drawXABCD(patterns: Pattern[], name: string,color: string){
    const pattern = patterns[0];
    const P1 = pattern.LastPatternPoint[0];
    const P2 = pattern.LastPatternPoint[1];
    const Aprice = (P1 + P2) / 2;
    const Btime = (Date.parse(pattern.Time[3]) / 1000);
    const Atime = Btime + this.delay;
    if(pattern.Status[0] === "completing"){
      const labelID = this._chart.createMultipointShape([{ time: Atime, price: Aprice },{ time: Atime, price: Aprice }],
        {
          shape: "callout",
          lock: true,
          disableSelection: false,
          disableSave: true,
          disableUndo: true,
          text: name,
          overrides:{
            fontsize: 12
          }
        });
        const line1ID = this._chart.createMultipointShape([{time: Atime, price: P1}],
          {
            shape: "horizontal_line",
            lock: true,
            disableSelection: true,
            disableSave: true,
            disableUndo: true,
            overrides: {
              linestyle: 2,
              linecolor: color
          }
          });
        const line2ID = this._chart.createMultipointShape([{time: Atime, price: P2}],
          {
            shape: "horizontal_line",
            lock: true,
            disableSelection: true,
            disableSave: true,
            disableUndo: true,
            overrides: {
              linestyle: 2,
              linecolor: color
            }
          });
        this._harmonicID.push({label: labelID, pattern: '' as EntityId});
        this._harmonicID.push({label: line1ID, pattern: line2ID});
    }
  }
}
