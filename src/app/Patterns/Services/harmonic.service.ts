import { Injectable } from '@angular/core';
import { EntityId } from 'src/assets/charting_library/charting_library';
import { Harmonic } from '../Interfaces/harmonic';

@Injectable({
  providedIn: 'root'
})

export class HarmonicService {

  private _harmonicPattern: Harmonic;

  private _harmonicID: [{label: EntityId, pattern: EntityId}] = [{label: '' as EntityId, pattern: '' as EntityId}];
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

  drawPatterns(patterns: string[]): void{
    this.removePatterns();
    this.split();
    patterns.forEach(patternName => {
      switch (patternName){
        case 'ABCD' : this.drawABCD(this._abcd); break;
        case 'Bat' : this.drawXABCD(this._bat, 'Bat','#8e44ad'); break;
        case 'AltBat' : this.drawXABCD(this._altbat, 'Alt Bat','#9b59b6'); break;
        case 'Butterfly' : this.drawXABCD(this._butterfly, 'Butterfly','#f1c40f'); break;
        case '5-0' : this.drawXABCD(this._5_0, '5-0','#e74c3c'); break;
        case 'Gartley' : this.drawXABCD(this._gartley, 'Gartley','#16a085'); break;
        case 'ThreeDrives' : this.drawThreeDrive(this._threedrives); break;
        case 'Cypher' : this.drawXABCD(this._cypher, 'Cypher','#3498db'); break;
        case 'Crab' : this.drawXABCD(this._crab, 'Crab','#f39c12'); break;
        case 'DeepCrab' : this.drawXABCD(this._deepcrab, 'DeepCrab','#d35400'); break;
        case 'Shark' : this.drawXABCD(this._shark, 'Shark','#2980b9'); break;
      }
    });
  }

  private split(): void{
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
    this._5_0 = this._harmonicPattern['5-0'];
  }
  private drawThreeDrive(pattern: any): void{
    pattern.forEach((point: any) => {
      const Aprice = point.Price[5];
      const Bprice = point.Price[5];
      const Cprice = point.Price[4];
      const Dprice = point.Price[3];
      const Eprice = point.Price[2];
      const Fprice = point.Price[1];
      const Atime = (Date.parse(point.Time[5]) / 1000);
      const Btime = (Date.parse(point.Time[5]) / 1000);
      const Ctime = (Date.parse(point.Time[4]) / 1000);
      const Dtime = (Date.parse(point.Time[3]) / 1000);
      const Etime = (Date.parse(point.Time[2]) / 1000);
      const Ftime = (Date.parse(point.Time[1]) / 1000);

      const shape1ID = this._chart.createMultipointShape([{ time: Etime, price: Eprice }, { time: Ftime, price: Fprice }, { time: Dtime, price: Dprice }],
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
            backgroundColor: '#2ecc71'
          }
        });
      const shape2ID = this._chart.createMultipointShape([{ time: Dtime, price: Dprice }, { time: Ctime, price: Cprice }, { time: Btime, price: Bprice }],
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
            backgroundColor: '#2ecc71'
          }
        });
      this._harmonicID.push({label: shape1ID, pattern: shape2ID});
      const labelID = this._chart.createMultipointShape([{ time: Atime, price: Aprice }, { time: Atime, price: Aprice }],
          {
            shape: 'callout',
            lock: true,
            disableSelection: false,
            disableSave: true,
            disableUndo: true,
            text: 'Three Drives',
            overrides: {
              fontsize: 12,
              backgroundColor: '#2ecc71',
              borderColor: '#2ecc71',
              color: '#FFFFFF'
            }
          });
      this._harmonicID.push({label: labelID, pattern: '' as EntityId});
    });
  }
  private drawABCD(abcdPattern: any[]): void{
    abcdPattern.forEach(point => {
      const Aprice = point.Price[3];
      const Bprice = point.Price[2];
      const Cprice = point.Price[1];
      const Dprice = point.Price[0];
      const Atime = (Date.parse(point.Time[3]) / 1000);
      const Btime = (Date.parse(point.Time[2]) / 1000);
      const Ctime = (Date.parse(point.Time[1]) / 1000);
      const Dtime = (Date.parse(point.Time[0]) / 1000);

      const shape1ID = this._chart.createMultipointShape([{ time: Atime, price: Aprice }, { time: Btime, price: Bprice }, { time: Ctime, price: Cprice }],
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
            backgroundColor: '#1abc9c'
          }
        });
      const shape2ID = this._chart.createMultipointShape([{ time: Btime, price: Bprice }, { time: Ctime, price: Cprice }, { time: Dtime, price: Dprice }],
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
            backgroundColor: '#1abc9c'
          }
        });
      const labelID = this._chart.createMultipointShape([{ time: Atime, price: Aprice }, { time: Atime, price: Aprice }],
          {
            shape: 'callout',
            lock: true,
            disableSelection: false,
            disableSave: true,
            disableUndo: true,
            text: 'ABCD',
            overrides: {
              fontsize: 12,
              backgroundColor: '#1abc9c',
              borderColor: '#1abc9c',
              color: '#FFFFFF'
            }
          });
      this._harmonicID.push({label: shape1ID, pattern: shape2ID});
      this._harmonicID.push({label: labelID, pattern: '' as EntityId});
    });
  }
  private drawXABCD(pattern: any[], name: string, color: string): void{
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
      
      const patternID = this._chart.createMultipointShape([{ time: Atime, price: Aprice }, { time: Btime, price: Bprice }, { time: Ctime, price: Cprice }, { time: Dtime, price: Dprice }, { time: Etime, price: Eprice }],
        {
          shape: 'xabcd_pattern',
          lock: true,
          disableSelection: false,
          disableSave: true,
          disableUndo: true,
          overrides: {
            textcolor: 'transparent',
            transparency: 50,
            color: 'transparent',
            backgroundColor: color
          }
        });
      const labelID = this._chart.createMultipointShape([{ time: Atime, price: Aprice }, { time: Atime, price: Aprice }],
        {
          shape: 'callout',
          lock: true,
          disableSelection: false,
          disableSave: true,
          disableUndo: true,
          text: name,
          overrides: {
            fontsize: 12,
            backgroundColor: color,
            borderColor: color,
            color: '#FFFFFF'
          }
        });
      this._harmonicID.push({label: labelID, pattern: patternID});
    });
  }
  removePatterns(): void{
    if (this._harmonicID.length > 2){
        this._harmonicID.forEach(id => {
        this._chart.removeEntity(id.label);
        this._chart.removeEntity(id.pattern);
      });
        this._harmonicID = [{label: '' as EntityId, pattern: '' as EntityId}];
    }
  }
}
