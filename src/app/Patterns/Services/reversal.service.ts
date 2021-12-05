import { Injectable } from '@angular/core';
import { EntityId } from 'src/assets/charting_library/charting_library';
import { reversal } from '../Interfaces/reversal';

@Injectable({
  providedIn: 'root'
})
export class ReversalService {
  
  private _reversalPattern: reversal;

  private _reversalId: [{label: EntityId, pattern: EntityId}] = [{label: '' as EntityId, pattern: '' as EntityId}];
  private _chart: any;

  private _headandshoulder: any[];
  private _double: any[];
  private _triple: any[];

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
        case 'headandShoulders' : 
          this.drawHeadandShoulders(this._headandshoulder);
        break;
        case 'Double' : 
          this.drawDouble(this._double);
        break;
        case 'Triple' : 
          this.drawTriple(this._triple);
        break;
      }
    });
  }

  private drawHeadandShoulders(pattern: any[]){
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
          disableUndo: true,
          overrides: {
            textcolor: 'transparent',
            transparency: 50,
            color: 'transparent',
            backgroundColor: '#fdcb6e'
          }
        });
        const labelID = this.chart.createMultipointShape([{ time: Atime, price: Aprice },{ time: Atime, price: Aprice }],
          {
            shape: "callout",
            lock: true,
            disableSelection: false,
            disableSave: true,
            disableUndo: true,
            text: 'Head & Shoulder',
            overrides: {
              textcolor: '#FFFFFF',
              transparency: 50,
              color: '#fdcb6e',
              backgroundColor: '#fdcb6e'
            }
          });
        this._reversalId.push({label: labelID, pattern: shapeID});
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

      const shape1ID = this._chart.createMultipointShape([{ time: midAB, price: Cprice }, { time: Btime, price: Bprice }, { time: Ctime, price: Cprice }],
        {
          shape: "triangle",
          lock: true,
          disableSelection: true,
          disableSave: true,
          disableUndo: true,
          overrides: {
            textcolor: 'transparent',
            transparency: 50,
            color: 'transparent',
            backgroundColor: '#fd79a8'
          }
        });
      const shape2ID = this._chart.createMultipointShape([{ time: Ctime, price: Cprice }, { time: Dtime, price: Dprice }, { time: midDE, price: Cprice }],
        {
          shape: "triangle",
          lock: true,
          disableSelection: true,
          disableSave: true,
          disableUndo: true,
          overrides: {
            textcolor: 'transparent',
            transparency: 50,
            color: 'transparent',
            backgroundColor: '#fd79a8'
          }
        });
        const labelID = this._chart.createMultipointShape([{ time: midAB, price: Cprice },{ time: midAB, price: Cprice }],
          {
            shape: "callout",
            lock: true,
            disableSelection: false,
            disableSave: true,
            disableUndo: true,
            text: 'Double',
            overrides: {
              fontsize: 12,
              backgroundColor: '#fd79a8',
              borderColor: '#fd79a8',
              color: '#FFFFFF'
            }
          });
        this._reversalId.push({label: '' as EntityId, pattern: shape1ID});
        this._reversalId.push({label: labelID, pattern: shape2ID});
    })
  }
  private drawTriple(pattern: any[]){
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
          disableUndo: true,
          overrides: {
            textcolor: 'transparent',
            transparency: 50,
            color: 'transparent',
            backgroundColor: '#00cec9'
          }
        });
        const labelID = this._chart.createMultipointShape([{ time: Atime, price: Aprice },{ time: Atime, price: Aprice }],
          {
            shape: "callout",
            lock: true,
            disableSelection: false,
            disableSave: true,
            disableUndo: true,
            text: 'Triple',
            overrides: {
              fontsize: 12,
              backgroundColor: '#00cec9',
              borderColor: '#00cec9',
              color: '#FFFFFF'
            }
          })
        this._reversalId.push({label: labelID, pattern: shapeID});
    })
  }

  private split(){
    this._headandshoulder = this._reversalPattern.Head_and_Shoulders;
    this._double = this._reversalPattern.Double;
    this._triple = this._reversalPattern.Triple;
  }
  removePatterns(){
    if(this._reversalId.length > 2){
        this._reversalId.forEach(id => {
        this._chart.removeEntity(id.label);
        this._chart.removeEntity(id.pattern);
      });
      this._reversalId = [{label: '' as EntityId,pattern: '' as EntityId}];
    }
  }
}
