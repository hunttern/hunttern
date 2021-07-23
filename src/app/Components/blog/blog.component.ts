import { Component } from '@angular/core';
import { INews } from '../../Interfaces/Inews';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent{
  newslist: INews[] = [
    {
      "title": "Binance Payments Cut Off by Clear Junction",
      "time": "December 21 , 2021",
      "author": "Camilla Jones",
      "category": "crypto"
    },
    {
      "title": "Binance Payments Cut Off by Clear Junction",
      "time": "December 21 , 2021",
      "author": "Camilla Jones",
      "category": "crypto"
    },
    {
      "title": "Binance Payments Cut Off by Clear Junction",
      "time": "December 21 , 2021",
      "author": "Camilla Jones",
      "category": "crypto"
    },
    {
      "title": "Binance Payments Cut Off by Clear Junction",
      "time": "December 21 , 2021",
      "author": "Camilla Jones",
      "category": "crypto"
    },
    {
      "title": "Binance Payments Cut Off by Clear Junction",
      "time": "December 21 , 2021",
      "author": "Camilla Jones",
      "category": "crypto"
    },
    {
      "title": "Binance Payments Cut Off by Clear Junction",
      "time": "December 21 , 2021",
      "author": "Camilla Jones",
      "category": "crypto"
    }
  ];
}
