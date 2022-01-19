import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent{

  constructor() { }
  @Input() cardvalue: number = 0;
  @Input() cardtype: string = '';

}
