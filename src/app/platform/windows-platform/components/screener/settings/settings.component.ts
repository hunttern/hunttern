import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  crypto: string[] = ['BTC','ETH','XRP','SHIB'];
  stock: string[] = ['APPLE','TESLA','GOOGLE','AMAZON'];
  forex: string[] = ['USD','EUR','GBP','NZD','CAD'];

  panelOpenState = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
