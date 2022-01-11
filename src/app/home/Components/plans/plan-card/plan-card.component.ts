import { Component, Input } from '@angular/core';

interface iOption {
  description: string;
  available: boolean;
}

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss']
})
export class PlanCardComponent {

  @Input() title: string = '';
  @Input() price: number = 0;
  @Input() currencey: string = '';
  @Input() duration: string = '';
  @Input() options: iOption[] = [];
  @Input() customeStyle = {
    background: '#18152D',
    btnBackground: '#2C2946',
    btnColor: '#FFFFFF'
  };

}
