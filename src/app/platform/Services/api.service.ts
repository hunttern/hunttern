import { Injectable } from '@angular/core';
import { IBasicDataFeed } from '../../../assets/charting_library/charting_library';
import { SignalRService } from './signal-r.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { patternClass } from './Patterns/Patterns.class';

import { testData } from '../Chart/Data/a';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class ApiService implements IBasicDataFeed {

  symbols: any;
  url: string = environment.baseurl + '/api/coin/';
  interval: string = '5M';
  token = this.getToken();
  reqheader = new HttpHeaders().set("Authorization", `bearer ${this.token}`);
  constructor(public ws: SignalRService, private http: HttpClient) {
    this.symbols = testData.symbols;
  }
  // function convertTZ(date, tzString) {
  //   return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", {timeZone: tzString}));   
  // }
  // convertTZ("2012/04/20 10:10:30 +0000", "Asia/Jakarta");
  // const convertedDate = convertTZ("2012/04/20 10:10:30 +0000", "Asia/Jakarta");
  // convertedDate.getHours();
  // const date = new Date();
  // convertTZ(date, "Asia/Jakarta");

  convertDate(date: Date): string{
    const dateYear = date.getFullYear();
    const dateMonth = date.getMonth() + 1;
    const dateDay = date.getDate();
    const dateHour = date.getHours();
    const dateMin = date.getMinutes();
    const dateSec = date.getSeconds();
    return dateYear + "-" + ((dateMonth<10)?0: '') + dateMonth + "-" + ((dateDay<10)?0: '') + dateDay + "T" + ((dateHour<10)?0: '') + dateHour + ":" + ((dateMin<10)?0: '') + dateMin + ":" + ((dateSec<10)?0: '') + dateSec + ".000";
  }
  binanceKlines(symbol: any, interval: any, startTime: any, endTime: any, limit: any){

    const end = new Date(endTime * 1000);
    const endDate: string = this.convertDate(end);
    
    const start = (new Date(startTime * 1000));
    const startDate: string = this.convertDate(start);

    const userId: string = patternClass.userId;
    this.interval = interval;
    
    switch(interval){
      case '5': this.interval = '5M'
      break;
      case '15': this.interval = '15M'
      break;
      case '30': this.interval = '30M'
      break;
      case '60': this.interval = '1H'
      break;
      case '240': this.interval = '4H'
      break;
      default: this.interval = interval;
    }
    const newurl: string = this.url + patternClass.Symbol + this.interval;
    // console.log(symbol.base_name[0]);
    return this.http.get(newurl+`?from=${startDate}&to=${endDate}&uniqeId=${userId}`,{headers: this.reqheader});
  }
  onReady(callback: any) {
    this.symbols = testData.symbols;
    callback({
      supports_marks: false,
      supports_timescale_marks: false,
      supports_time: true,
      supported_resolutions: [
         '5', '15', '30', '60', '240', '1D','1W'
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
        console.error(err);
      }
    });
  }
  subscribeBars(symbolInfo: any, resolution: any, onRealtimeCallback: any, subscriberUID: any, onResetCacheNeededCallback: any) {
    this.ws.subscribeOnStream(symbolInfo, resolution, onRealtimeCallback, subscriberUID, onResetCacheNeededCallback,this.interval);
  }
  unsubscribeBars(subscriberUID: any) {
    this.ws.unsubscribeFromStream();
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
  getToken(){
    let token: string = '';
    return token;
  }
}
