import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SplitAreaDirective, SplitComponent } from 'angular-split';

@Component({
  selector: 'app-windows-platform',
  templateUrl: './windows-platform.component.html',
  styleUrls: ['./windows-platform.component.scss']
})
export class WindowsPlatformComponent implements AfterViewInit { 

  isChecked = true;
  formGroup: FormGroup;
  leftPanelSize: number = 22;
  rightPanelSize: number = 78;

  // @ViewChild('leftSide') leftpanel: SplitAreaDirective;

  constructor(formBuilder: FormBuilder) {
    this.formGroup = formBuilder.group({
      enableWifi: false,
      acceptTerms: [false, Validators.requiredTrue]
    });
  }
  ngAfterViewInit(){
    // console.log("leftPanel : ",this.leftpanel.collapse(0));
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
  closeLeftPanel(){
    // this.leftPanelSize = 0;
    // this.rightPanelSize = 100;
    // console.log(this.leftpanel.size);
    // for(let i=0; i< this.leftPanelSize; i++){
    //   this.leftPanelSize--;
    //   this.rightPanelSize++;
    // }
  }
}
