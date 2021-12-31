import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { patternClass } from '../../../../../Patterns/Patterns.class';
import { DialogComponent } from '../dialog/dialog.component';
import { Iwatchlist } from './Data/Iwatchlist';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  selectedRow: number = 0;
  selectedwatchlist: number = 0;
  watchlistOpen: boolean = false;
  watchlists: Iwatchlist[] = [
    {watchlistName: 'default1',
     coins: [
      {symbol: 'BTCUSDT',change: 1301.05, last: 5.65,vol: 125.71},
      {symbol: 'ETHUSDT',change: 1301.05, last: 5.65,vol: 125.71},
      {symbol: 'ADAUSDT',change: 1301.05, last: 5.65,vol: 125.71}
    ]},
    {watchlistName: 'default2',
     coins: [
      {symbol: 'XRPUSDT',change: 1301.05, last: 5.65,vol: 125.71},
      {symbol: 'SHIBUSDT',change: 1301.05, last: 5.65,vol: 125.71},
      {symbol: 'SOLUSDT',change: 1301.05, last: 5.65,vol: 125.71}
    ]}
  ];
  
  constructor(private dialog: MatDialog){}
  getSymbolChart(symbol: string, row: number){
    const chart =   patternClass.chart;
    this.selectedRow = row;
    chart.setSymbol(symbol);
  }
  addWatchlist(){
    let dialogRef = this.dialog.open(DialogComponent, {
      data: {title: "Add to Watchlist", action: "add", label: "watchlist name"}
    });
    dialogRef.afterClosed().subscribe( (res: string) => {
      console.log(res)
      if(res)
      this.watchlists.push({watchlistName: res,coins:[]});
    });
  }
  renameWatchlist(){
    let dialogRef = this.dialog.open(DialogComponent, {
      data: {title: "Rename Watchlist", action: "edit", label: "watchlist name"}
    })
    dialogRef.afterClosed().subscribe((res: string) => this.watchlists[this.selectedwatchlist].watchlistName = res)
  }
  selectWatchlist(i:number){
    this.selectedwatchlist = i;
  }

  openWahtchlist(){
    this.watchlistOpen = !this.watchlistOpen;
  }
  removeWatchlist(index: number){
    console.log(index);
    this.watchlists = this.watchlists.splice(index-1,1);
    console.log(this.watchlists)
  }
}
