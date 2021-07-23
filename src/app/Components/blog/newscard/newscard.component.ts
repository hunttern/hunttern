import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-newscard',
  templateUrl: './newscard.component.html',
  styleUrls: ['./newscard.component.scss']
})
export class NewscardComponent{

@Input() title: string = "Synthetix Rallies as DeFi Protocol Announces Layer 2 Launch";
@Input() news: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore";
@Input() author: string = "Camilla Jones";
@Input() time: string = "December 21 , 2021";

}
