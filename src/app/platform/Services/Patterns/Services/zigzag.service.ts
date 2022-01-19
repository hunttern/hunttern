import { Injectable } from '@angular/core';
import { EntityId } from 'src/assets/charting_library/charting_library';

@Injectable()

export class ZigzagService {
  private _zigzag: any[] = [];
  private _zigzagID: EntityId[] = [];
  private _chart: any;

  set chart(chart: any){
    this._chart = chart;
  }
  set zigzag(zigzag: any[]){
    this._zigzag = zigzag;
  }

  drawZigzag(){
    if(this._zigzag.length > 0){
      this.removeZigzag();
  
      let prevtime = (Date.parse(this._zigzag[1][0]) / 1000);
      let prevprice = this._zigzag[1][1];
  
      this._zigzag.forEach((point:any, index: number) => {
        if(index > 1){
          const time = (Date.parse(point[0]) / 1000);
          const price = point[1];
          const color = price < prevprice ? "#ff0000" : "#00ff00";
          const id = this._chart.createMultipointShape([{ time: time, price: price }, { time: prevtime, price: prevprice }],
            {
              shape: "trend_line",
              lock: true,
              disableSelection: false,
              disableSave: true,
              disableUndo: true,
              overrides: {
                bold: true,
                linewidth: 1,
                linestyle: 0,
                linecolor: color
              }
            });
          this._zigzagID.push(id);
          prevprice = price;
          prevtime = time;
        }
      });
    }else{
      this.removeZigzag();
    }
  }

  removeZigzag(){
    if(this._zigzagID.length > 0){
      this._zigzagID.forEach(id => {
        this._chart.removeEntity(id);
      });
      this._zigzagID = [];
    }
  }
}
