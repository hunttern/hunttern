import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { patternClass } from '../../../../../Patterns/Patterns.class';
import { DialogComponent } from '../dialog/dialog.component';
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
    dialogRef.afterClosed().subscribe(console.log)
  }
  renameWatchlist(){
    let dialogRef = this.dialog.open(DialogComponent, {
      data: {title: "Rename Watchlist", action: "edit", label: "watchlist name"}
    })
    dialogRef.afterClosed().subscribe(console.log)
  }
}
