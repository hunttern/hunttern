import { Component } from '@angular/core';

@Component({
  selector: 'app-whatchlist',
  templateUrl: './whatchlist.component.html',
  styleUrls: ['./whatchlist.component.scss']
})
export class WhatchlistComponent {
  h1: number = 50;
  h2: number = 50;

  setPerY1(result: any){
    this.h1 = result - 3;
    this.h2 = 100 - result;
  }
}
