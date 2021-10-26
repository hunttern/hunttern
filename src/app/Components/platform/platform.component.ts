import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { patternClass } from '../../Patterns/Patterns.class';
@Component({
  selector: 'app-platform',
  templateUrl: './platform.component.html',
  styleUrls: ['./platform.component.scss']
})
export class PlatformComponent {
  isChecked = true;
  formGroup: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      enableWifi: false,
      acceptTerms: [false, Validators.requiredTrue]
    });
  }
  onFormSubmit(formValue: any) {
    alert(JSON.stringify(formValue, null, 2));
  }
  input: string;
  onReversal(){
    this.input = 'reversal';
  }
  onCandle(){
    this.input = 'candle';
  }
  onHarmonic(){
    this.input = 'harmonic';
  }
  onContinuous(){
    this.input = 'continuous';
  }
}
