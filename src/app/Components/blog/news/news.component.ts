import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent{
  
  @Input() title: string = 'Binance Payments Cut Off by Clear Junction';
  @Input() author: string = 'Camilla Jones';
  @Input() time: string = 'December 21 , 2021';
}
