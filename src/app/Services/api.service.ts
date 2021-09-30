import { Injectable } from '@angular/core';
import { IBasicDataFeed } from '../../assets/charting_library/charting_library';
import { SignalRService } from './signal-r.service';
import { HttpClient } from '@angular/common/http';
import {retry} from 'rxjs/operators';

import * as data from '../../Data/a.json';
@Injectable({
  providedIn: 'root'
})
export class ApiService implements IBasicDataFeed {
  symbols: any;
  url: string = 'http://87.107.146.161:5000/api/Index';
  constructor(public ws: SignalRService, private http: HttpClient ) {
    this.symbols = data.symbols;
  }
  binanceKlines(symbol: any, interval: any, startTime: any, endTime: any, limit: any){
    return this.http.get(this.url);
  }
  onReady(callback: any) {
    this.symbols = data.symbols;
    callback({
      supports_marks: false,
      supports_timescale_marks: false,
      supports_time: true,
      supported_resolutions: [
         '5', '15', '30', '60', '120', '240', '360', '480', '720', '1D', '3D', '1W', '1M'
      ]
    });
  }
  searchSymbols(userInput: string, exchange: any, symbolType: any, onResultReadyCallback: any) {
    userInput = userInput.toUpperCase()
    onResultReadyCallback(
      this.symbols.filter((symbol: any) => {
        return symbol.symbol.indexOf(userInput) >= 0
      }).map((symbol: any) => {
        return {
          symbol: symbol.symbol,
          full_name: symbol.symbol,
          description: symbol.baseAsset + ' / ' + symbol.quoteAsset,
          ticker: symbol.symbol,
          exchange: 'Binance',
          type: 'crypto'
        }
      })
    )
  }
  getBars(symbolInfo: any, resolution: any, from: any, to: any, onHistoryCallback: any, onErrorCallback: any, firstDataRequest: any) {
    this.binanceKlines(symbolInfo, resolution, from, to, 500).subscribe({
      next: (totalKlines: any) => {
        let historyCBArray = totalKlines.map((kline: any) => ({
          time: new Date(kline.openTime).valueOf(),
          open: parseFloat(kline.open),
          high: parseFloat(kline.high),
          low: parseFloat(kline.low),
          close: parseFloat(kline.close),
          // volume: parseFloat(Math.random() * 1000)
      }))
      onHistoryCallback(historyCBArray, { noData: false })
      },
      error: (err: any) => {
        console.log(err);
      }
    });
  }
  subscribeBars(symbolInfo: any, resolution: any, onRealtimeCallback: any, subscriberUID: any, onResetCacheNeededCallback: any) {
    this.ws.subscribeOnStream(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback)
  }
  unsubscribeBars(subscriberUID: any) {
    //  this.ws.unsubscribeFromStream(subscriberUID)
  }
  resolveSymbol(symbolName : any, onSymbolResolvedCallback: any, onResolveErrorCallback: any) {
    false && console.log('👉 resolveSymbol:', symbolName)
    const comps = symbolName.split(':')
    symbolName = (comps.length > 1 ? comps[1] : symbolName).toUpperCase()
    function pricescale(symbol: any) {
      for (let filter of symbol.filters) {
        if (filter.filterType == 'PRICE_FILTER') {
          return Math.round(1 / parseFloat(filter.tickSize))
        }
      }
      return 1
    }
    for (let symbol of this.symbols) {
      if (symbol.symbol == symbolName) {
        setTimeout(() => {
          onSymbolResolvedCallback({
            name: symbol.symbol,
            description: symbol.baseAsset + ' / ' + symbol.quoteAsset,
            ticker: symbol.symbol,
            exchange: 'Binance',
            listed_exchange: 'Binance',
            type: 'crypto',
            session: '24x7',
            minmov: 1,
            pricescale: pricescale(symbol),
            // timezone: 'UTC',
            has_intraday: true,
            has_daily: true,
            has_weekly_and_monthly: true,
            currency_code: symbol.quoteAsset
          })
        }, 0)
        return
      }
    }
    // minmov/pricescale will give the value of decimal places that will be shown on y-axis of the chart
    //
    onResolveErrorCallback('not found')
  }
}
