import { Injectable } from '@angular/core';
import { EntityId } from 'src/assets/charting_library/charting_library';
import { Harmonic } from '../../Interfaces/harmonic';
import { Iposition } from '../../Interfaces/position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private _harmonicPattern: Harmonic;
  private _chart: any;
  private _harmonicID: [{label: EntityId, pattern: EntityId}] = [{label:'' as EntityId,pattern:'' as EntityId}];

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

  set position(pos:Harmonic){
    this._harmonicPattern = pos;
  }
  set chart(chart: any){
    this._chart = chart;
  }
  drawLines(patterns: string[]){
    this.removePatterns();
    this.split();
    patterns.forEach(patternName => {
      switch (patternName){
        case 'ABCD' : 
          this.drawPosition(this._abcd);
        break;
        case 'Bat' : 
          this.drawPosition(this._bat);
        break;
        case 'AltBat' : 
          this.drawPosition(this._altbat);
        break;
        case 'Butterfly' : 
          this.drawPosition(this._butterfly);
        break;
        case '5-0' : 
          this.drawPosition(this._5_0);
        break;
        case 'Gartley' : 
          this.drawPosition(this._gartley);
        break;
        case 'ThreeDrives' : 
          this.drawPosition(this._threedrives);
        break;
        case 'Cypher' : 
          this.drawPosition(this._cypher);
        break;
        case 'Crab' : 
          this.drawPosition(this._crab);
        break;
        case 'DeepCrab' : 
          this.drawPosition(this._deepcrab);
        break;
        case 'Shark' : 
          this.drawPosition(this._shark);
        break;
      }
    });
  }
  drawPosition(position: Iposition[]){
    console.log("Pos: ",position);
    if(position.length > 0){
      const prz: number[] = position[0].PRZ;
      const entry: any = position[0].Entry;
      const SL: number = position[0].StopLosses[0];
      const TP1: number = position[0].TargetPoints[0];
      const TP2: number = position[0].TargetPoints[1];
      const type: string = position[0].PositionType[0];
      console.log("draw");
      const entryLineID = this._chart.createMultipointShape([{price: entry}],
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
      const SLLineID = this._chart.createMultipointShape([{price: SL}],
        {
          shape: "horizontal_line",
          lock: true,
          disableSelection: true,
          disableSave: true,
          disableUndo: true,
          overrides: {
            linestyle: 2,
            linecolor: '#ff0000'
          }
        });
      this._harmonicID.push({label: entryLineID, pattern: SLLineID});
      const TP1LineID = this._chart.createMultipointShape([{price: TP1}],
        {
          shape: "horizontal_line",
          lock: true,
          disableSelection: true,
          disableSave: true,
          disableUndo: true,
          overrides: {
            linestyle: 2,
            linecolor: '#00ff00'
          }
        });
      const TP2LineID = this._chart.createMultipointShape([{price: TP2}],
        {
          shape: "horizontal_line",
          lock: true,
          disableSelection: true,
          disableSave: true,
          disableUndo: true,
          overrides: {
            linestyle: 2,
            linecolor: '#00ff00'
          }
        });
      this._harmonicID.push({label: TP1LineID, pattern: TP2LineID});
    }
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
}
