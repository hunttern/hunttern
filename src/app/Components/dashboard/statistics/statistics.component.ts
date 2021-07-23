import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/Interfaces/payment';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent {
payments: Payment[] = [{"payment": "payment15474" , "date": "May 21 , 2021", "price": 45},{"payment": "payment15474" , "date": "May 21 , 2021", "price": 45},{"payment": "payment15474" , "date": "May 21 , 2021", "price": 45}]

}
