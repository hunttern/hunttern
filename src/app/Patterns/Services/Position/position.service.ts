import { Injectable } from '@angular/core';
import { Iposition } from '../../Interfaces/position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  private _position: Iposition[];
  private _chart: any;

  set position(pos:Iposition[]){
    this._position = pos;
  }
  set chart(chart: any){
    this._chart = chart;
  }

  drawPosition(){

    const prz: number[] = this._position[0].PRZ;
    const entry: any = this._position[0].Entry;
    const SL: number = this._position[0].StopLosses[0];
    const TP1: number = this._position[0].TargetPoints[0];
    const TP2: number = this._position[0].TargetPoints[1];
    const type: string = this._position[0].PositionType[0];
    // const price = entry;
    // const time = (Date.parse(entry.Time) / 1000);
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
  }
}
