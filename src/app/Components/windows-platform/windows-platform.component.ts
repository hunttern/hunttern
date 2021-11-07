import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-windows-platform',
  templateUrl: './windows-platform.component.html',
  styleUrls: ['./windows-platform.component.scss']
})
export class WindowsPlatformComponent { 
  h1: number = 60;
  h2: number = 40;
  h3: number = 50;
  h4: number = 50;
  w1: number = 20;
  w2: number = 55;
  w3: number = 25;

  height1 = {"height": `${this.h1}%`};
  height2 = {"height": `${this.h2}%`};
  height3 = {"height": `${this.h3}%`};
  height4 = {"height": `${this.h4}%`};
  
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

  setPerY1(result: any){
    this.h1 = result;
    this.h2 = 97 - result;
  }
  setPerY2(result: any){  
    this.h3 = result - 3;
    this.h4 = 103 - result;
  }
  setPerX1(result: any){
    this.w1 = result;
    this.w2 = 100 - result - this.w3;
  }
  setPerX2(result: any){
    this.w3 = 101 - result;
    this.w2 = result - this.w1;
  }
}
