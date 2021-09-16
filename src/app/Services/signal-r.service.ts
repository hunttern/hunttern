import { Injectable } from '@angular/core';
import * as signalR from '@aspnet/signalr';
@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  hubConnection: signalR.HubConnection;
  url: string = 'http://87.107.146.161:5000/TestHub';
  streams: any[] = [];
  constructor() {
     this._createSocket();
  }
  _createSocket() {
    this.hubConnection = new signalR.HubConnectionBuilder()
    .withUrl(this.url)
    .build();
    
    this.hubConnection
    .start()
    .then(() => {
      console.info(`Binance WS Open`)
      localStorage.setItem("wsStatus", '1')
    })
    .catch((err: any) => {
      return console.error(err.toString());
    })
  }
  subscribeOnStream(symbolInfo: any, resolution: any, onRealtimeCallback: any, subscribeUID: any, onResetCacheNeededCallback: any) {
    this.hubConnection.on('LiveCandle', (msg) => {
      console.log(msg)
    })
    this.hubConnection.on("RealTime", (msg: any) => { 
    let sData = msg      
    if (sData && sData.open) {
        
      let { open, close, low, high, openTime } = sData
      // Update data
      let lastSocketData = {
        time: new Date(openTime).valueOf(),
        close: parseFloat(close),
        open: parseFloat(open),
        high: parseFloat(high),
        low: parseFloat(low),
        // volume: parseFloat(Math.random() * 1000),
    }
      onRealtimeCallback({...lastSocketData})
      
      }
    });
  }
  unsubscribeFromStream(subscriberUID: any) {
    try {
      let id = subscriberUID.split("_")[0]
      const obj = {
        method: "ReceiveMessage",
        params: [
          this.streams[id]
        ],
        id: 1
      }
      delete this.streams[id]
      // if (this.hubConnection.readyState === 1) {
      //     this.hubConnection.send(JSON.stringify(obj))
      // }
    }
    catch (e) {
      console.error(e)
    }
  }
}
