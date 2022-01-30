import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SignalRService } from '../../../Services/signal-r.service';

interface Ipatterns{
  harmonic: any;
  classic: any;
  candle: any;
  zigzag: {active: boolean, value: number};
  prediction: boolean;
  error: number;
}
@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent{

  constructor(private signalr: SignalRService, private fb: FormBuilder) { }
  patterns: Ipatterns = {harmonic: null, classic: null,candle: null,zigzag: {active: false,value: 10},prediction: false,error: 10};
  harmonic: boolean = true;
  classic: boolean = false;
  candle: boolean = false;
  
  input:FormGroup = this.fb.group({
    zigzagdraw: [false],
    prediction: [false],
    zigzag: [10,Validators.required],
    error: [10,Validators.required],
  })

  onClink(type: string){
    switch(type){
      case 'harmonic' : {
        this.harmonic = true;
        this.candle = false;
        this.classic = false;
      }
      break;
      case 'candle' : {
        this.harmonic = false;
        this.candle = true;
        this.classic = false;
      }
      break;
      case 'classic': {
        this.harmonic = false;
        this.candle = false;
        this.classic = true;
      }
      break;
    }
  }
  drawPatterns(patterns: {form:FormGroup, type: string}){
    switch(patterns.type){
      case 'harmonic':{
        this.patterns.harmonic = patterns.form;
      }
        break;
      case 'candle':{
        this.patterns.candle = patterns.form;
      }
        break;
      case 'classic':{
        this.patterns.classic = patterns.form;
      }
        break;
    }
    const formValues = this.input.value;
    this.patterns.zigzag = {active: formValues.zigzagdraw,value: formValues.zigzag};
    this.patterns.error = formValues.error;
    this.patterns.prediction = formValues.prediction;
    this.signalr.OnClick(this.patterns);
  }
}
