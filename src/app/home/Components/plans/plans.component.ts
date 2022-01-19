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
    {description: 'Organize your wallet easily', available: true},
    {description: 'Wide variety of different currencies', available: true},
    {description: 'Daily analysis of the CC changes', available: true},
    {description: 'Exchange as much as you can', available: true},
    {description: '24 hours customer support', available: false}
  ];
  optionsCard2: iOption[] = [
    {description: 'Organize your wallet easily', available: true},
    {description: 'Wide variety of different currencies', available: true},
    {description: 'Daily analysis of the CC changes', available: true},
    {description: 'Exchange as much as you can', available: true},
    {description: '24 hours customer support', available: true}
  ];
  optionsCard3: iOption[] = [
    {description: 'Organize your wallet easily', available: true},
    {description: 'Wide variety of different currencies', available: true},
    {description: 'Daily analysis of the CC changes', available: false},
    {description: 'Exchange as much as you can', available: false},
    {description: '24 hours customer support', available: false}
  ];
  premiumStyle = {
    background: 'linear-gradient(156.9deg, #5046C9 5.22%, #7268E7 93.52%)',
    btnBackground: '#FFFFFF',
    btnColor: '#0E0C1F',
    bodyBackground: 'background: linear-gradient(156.9deg, #5046C9 5.22%, #7268E7 93.52%)'
  };

}
