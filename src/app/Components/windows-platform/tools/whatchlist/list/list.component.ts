import { Component } from '@angular/core';
import { patternClass } from '../../../../../Patterns/Patterns.class';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  getSymbolChart(symbol: string){
    const chart =   patternClass.chart;
    chart.setSymbol(symbol);
  }
}
