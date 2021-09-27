import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { EnrollmentService } from 'src/app/Services/enrollment.service';
import { SignalRService } from 'src/app/Services/signal-r.service';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent{

  constructor(private fb: FormBuilder, private enroll: EnrollmentService, private test: SignalRService ) { }
  subgroup: AbstractControl[] = [];
  patterns: Array<any> = [
    {name: "ABCD", value: "ABCD"},
    {name: "Bat", value: "Bat"},
    {name: "AltBat", value: "AltBat"},
    {name: "Butterfly", value: "Butterfly"},
    {name: "Cypher", value: "Cypher"},
    {name: "Crab", value: "Crab"},
    {name: "DeepCrab", value: "DeepCrab"},
    {name: "Shark", value: "Shark"},
    {name: "ThreeDrives", value: "ThreeDrives"},
    {name: "Cup", value: "cup"},
    {name: "5-0", value: "5-0"},
    // {name: "Gartley", value: "Gartley"},
    // {name: "HeadandShoulders", value: "headandShoulders"},
    // {name: "Double", value: "double"},
    // {name: "Triple", value: "triple"},
    // {name: "Rectangle", value: "rectangle"},
    // {name: "Triangle", value: "triangle"},
    // {name: "Flag", value: "flag"},
  ];
  arrayItems: {name: string, value: string}[];
  url: string = '';
  signalSettingForm: FormGroup = this.fb.group({
    zigzag: [0,Validators.required],
    error: [0,Validators.required],
    patterns: [this.fb.array(this.subgroup)]
  });
  onSubmit(){
    // this.enroll.getPatterns(this.signalSettingForm).pipe(
    //   // map()
    // ).subscribe(console.log);
    const patterns = this.test.OnClick(this.signalSettingForm);
  }
  onCheckboxChange(e: any) {
    if (e.target.checked) {
      this.subgroup.push(new FormControl(e.target.value));
    } else {
      this.subgroup.forEach((item: any, index: number) => {
        if (item.value == e.target.value) {
          this.subgroup.splice(index,1);
        }
      });
    }
    this.signalSettingForm.get('patterns')?.setValue(this.subgroup);
  }
}
