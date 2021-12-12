import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent{

  constructor() { }

  harmonic: boolean = true;
  continuous: boolean = false;

  onClink(type: string){
    switch(type){
      case 'harmonic' : {
        this.harmonic = true;
        this.continuous = false;
      }
      break;
      case 'continuous' : {
        this.harmonic = false;
        this.continuous = true;
      }
      break;
    }
  }
}
