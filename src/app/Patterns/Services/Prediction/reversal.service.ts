import { Injectable } from '@angular/core';
import { EntityId } from 'src/assets/charting_library/charting_library';
import { Pattern } from '../../Interfaces/pattern';
import { reversal } from '../../Interfaces/reversal';

@Injectable({
  providedIn: 'root'
})
export class ReversalService {

  private _reversalPattern: reversal;

  private _reversalID: [{label: EntityId, pattern: EntityId}] = [{label:'' as EntityId,pattern:'' as EntityId}];
  private _chart: any;

  private _double: Pattern[];
  private _triple: Pattern[];
  private _headandshoulder: Pattern[];

  private delay: number = 1800000000;
  set chart(chart: any){
    this._chart = chart;
  }
  set reversalPattern(patterns: reversal){
    this._reversalPattern = patterns;
  }

  drawPatterns(patterns: string[]){
    this.removePatterns()
    this.split();
    patterns.forEach(patternName => {
      switch (patternName){
        case 'Double' :{
          if(this._double.length > 0){
            this.drawDouble(this._double);
          }
        }
        break;
        case 'Triple' :{
          if(this._triple.length > 0)
          this.drawTriple(this._triple);
        }
        break;
        case 'HeadandShoulders' :{
          if(this._headandshoulder.length > 0)
          this.drawHeadAndShoulder(this._headandshoulder);
        }
      }
    });
  }

  removePatterns(){
    if(this._reversalID.length > 2){
        this._reversalID.forEach(id => {
        this._chart.removeEntity(id.label);
        this._chart.removeEntity(id.pattern);
      });
      this._reversalID = [{label: '' as EntityId,pattern: '' as EntityId}];
    }
  }
  private split(){
    this._double = this._reversalPattern.Double;
    this._triple = this._reversalPattern.Triple;
    this._headandshoulder = this._reversalPattern.Head_and_Shoulders;
  }

  private drawDouble(patterns: any){
    const pattern = patterns[0];
    const P1 = pattern.LastPatternPoint[0];
    const P2 = pattern.LastPatternPoint[1];
    const Aprice = (P1 + P2)/2;
    const Btime = (Date.parse(pattern.Time[5]) / 1000);
    const Atime = Btime + this.delay;
    const labelID = this._chart.createMultipointShape([{ time: Atime, price: Aprice },{ time: Atime, price: Aprice }],
      {
        shape: "callout",
        lock: true,
        disableSelection: false,
        disableSave: true,
        disableUndo: true,
        text: "Double",
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
            linecolor: '#ffff00'
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
            linecolor: '#ffff00'
          }
        });
      this._reversalID.push({label: labelID, pattern: '' as EntityId});
      this._reversalID.push({label: line1ID, pattern: line2ID});
  }
  private drawTriple(abcdPattern: Pattern[]){
    const pattern = abcdPattern[0];
    const P1 = pattern.LastPatternPoint[0];
    const P2 = pattern.LastPatternPoint[1];
    const Aprice = (P1+P2) / 2;
    const Btime = (Date.parse(pattern.Time[2]) / 1000);
    const Atime = Btime + this.delay;
    const labelID = this._chart.createMultipointShape([{ time: Atime, price: Aprice }, { time: Atime, price: Aprice }],
      {
        shape: "callout",
        lock: true,
        disableSelection: true,
        disableSave: true,
        disableUndo: true,
        text: "Triple",
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
          linecolor: '#ffff00'
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
          linecolor: '#ffff00'
        }
      });
    this._reversalID.push({label: labelID, pattern: '' as EntityId});
    this._reversalID.push({label: line1ID, pattern: line2ID});
  }
  private drawHeadAndShoulder(patterns: Pattern[]){
    const pattern = patterns[0];
    const P1 = pattern.LastPatternPoint[0];
    const P2 = pattern.LastPatternPoint[1];
    const Aprice = (P1 + P2) / 2;
    const Btime = (Date.parse(pattern.Time[3]) / 1000);
    const Atime = Btime + this.delay;
    const labelID = this._chart.createMultipointShape([{ time: Atime, price: Aprice },{ time: Atime, price: Aprice }],
      {
        shape: "callout",
        lock: true,
        disableSelection: false,
        disableSave: true,
        disableUndo: true,
        text: "Head & Sholder",
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
            linecolor: '#ffff00'
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
            linecolor: '#ffff00'
          }
        });
      this._reversalID.push({label: labelID, pattern: '' as EntityId});
      this._reversalID.push({label: line1ID, pattern: line2ID});
  }

}
