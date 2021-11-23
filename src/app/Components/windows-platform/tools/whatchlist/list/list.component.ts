import { Component } from '@angular/core';
import { patternClass } from '../../../../../Patterns/Patterns.class';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  selectedRow: number = 0;
  coins: Array<{symbol: string,last: number, change: number, vol: number}> = [
    {symbol: 'BTCUSDT',change: 1301.05, last: 5.65,vol: 125.71},
    {symbol: 'ETHUSDT',change: 1301.05, last: 5.65,vol: 125.71},
    {symbol: 'ADAUSDT',change: 1301.05, last: 5.65,vol: 125.71}
  ]

  getSymbolChart(symbol: string, row: number){
    const chart =   patternClass.chart;
    this.selectedRow = row;
    chart.setSymbol(symbol);
  }
}
