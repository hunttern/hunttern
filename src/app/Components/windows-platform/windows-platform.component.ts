import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-windows-platform',
  templateUrl: './windows-platform.component.html',
  styleUrls: ['./windows-platform.component.scss']
})
export class WindowsPlatformComponent {

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
