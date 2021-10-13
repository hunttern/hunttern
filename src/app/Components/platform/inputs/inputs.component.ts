import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent implements OnChanges{

  constructor() { }

  harmonic: boolean = true;
  candle: boolean = false;
  continuous: boolean = false;
  reversal: boolean = false;
  
  @Input() input: string = 'harmonic';
  
  ngOnChanges(){
    switch(this.input){
      case 'reversal' : {
        this.reversal = true;
        this.harmonic = false;
        this.continuous = false;
        this.candle = false;
      }
      break;
      case 'harmonic' : {
        this.reversal = false;
        this.harmonic = true;
        this.continuous = false;
        this.candle = false;
      }
      break;
      case 'candle' : {
        this.reversal = false;
        this.harmonic = false;
        this.continuous = false;
        this.candle = true;
      }
      break;
      case 'continuous' : {
        this.reversal = false;
        this.harmonic = false;
        this.continuous = true;
        this.candle = false;
      }
      break;
    }
  }
}
