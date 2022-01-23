import { Component } from '@angular/core';

interface iOption {
  description: string;
  available: boolean;
}

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent {

  constructor() { }
  optionsCard1: iOption[] = [
    {description: 'Access to all markets', available: true},
    {description: 'deep search on the smart screener', available: true},
    {description: 'Crypto & Forex market ', available: true},
    {description: 'Crypto & Forex market ', available: true},
    {description: 'Access to candle stick pattern', available: true}
  ];
  optionsCard2: iOption[] = [
    {description: 'Customization of harmonic parameters', available: true},
    {description: 'Harmonic prediction of patterns', available: true},
    {description: 'Access to 15 harmonic patterns', available: true},
    {description: '24/7 customer support', available: true},
    {description: 'Access to historical pattern', available: true}
  ];
  optionsCard3: iOption[] = [
    {description: 'Access to all markets', available: true},
    {description: 'Access to statistics', available: true},
    {description: 'deep search on the smart screener', available: true},
    {description: 'Receive a signal in Telegram Bot', available: true},
    {description: 'Access to classic pattern', available: true}
  ];
  premiumStyle = {
    background: 'linear-gradient(156.9deg, #5046C9 5.22%, #7268E7 93.52%)',
    btnBackground: '#FFFFFF',
    btnColor: '#0E0C1F',
    bodyBackground: 'background: linear-gradient(156.9deg, #5046C9 5.22%, #7268E7 93.52%)'
  };

}
