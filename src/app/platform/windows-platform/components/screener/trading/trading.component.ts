import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trading',
  templateUrl: './trading.component.html',
  styleUrls: ['./trading.component.scss']
})
export class TradingComponent implements OnInit {

  trades: {symbol: string, type: string, pattern: string, time: string, entry: number, tp1: number, tp2: number, sl: number, status: string, date: string}[] = [
    {symbol: 'EUR/USD',type: 'Bullish',pattern: '5-0', time: '30m', entry: 1.11469, tp1: 1.11571, tp2: 1.11634, sl: 1.11413, status: 'Completed', date: '29/01/22 23:30'},
    {symbol: 'BTC/USDT',type: 'Bullish',pattern: 'Cypher', time: 'D', entry: 47962.679, tp1: 53860.752, tp2: 78073.662, sl: 45329.610, status: 'Completed', date: '26/04/21 00:00'},
    {symbol: 'XAU/USD',type: 'Bullish',pattern: 'Shark', time: '5m', entry: 1781.95, tp1: 1785.32, tp2: 1788.13, sl: 1780.08, status: 'Completed', date: '28.01.22 12:25'},
    {symbol: 'GBP/USDT',type: 'Bearish',pattern: 'AB=CD', time: '30m', entry: 1.34315, tp1: 1.34066, tp2: 1.33907, sl: 1.34390, status: 'Completed', date: '28.01.22 22:30'},
    {symbol: 'XRP/USDT',type: 'Bearish',pattern: 'AltBat', time: '1H', entry: 1.1527, tp1: 1.1263, tp2: 1.1036, sl: 1.1670, status: 'Completed', date: '21/10/21 04:00'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
