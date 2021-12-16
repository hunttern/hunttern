import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignalRService } from 'src/app/Services/signal-r.service';

@Component({
  selector: 'app-harmonic',
  templateUrl: './harmonic.component.html',
  styleUrls: ['./harmonic.component.scss']
})
export class HarmonicComponent implements OnInit {

  constructor(private fb: FormBuilder, private signalr: SignalRService) { }

  ngOnInit(): void {
  }

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
    {name: "Gartley", value: "Gartley"},
    {name: "5-0", value: "5-0"},
    {name: "HeadandShoulders", value: "HeadandShoulders"},
    {name: "Double", value: "Double"},
    {name: "Triple", value: "Triple"},
    // {name: "Cup", value: "cup"},
    // {name: "Rectangle", value: "rectangle"},
    // {name: "Triangle", value: "triangle"},
    // {name: "Flag", value: "flag"},
  ];
  arrayItems: {name: string, value: string}[];
  signalSettingForm: FormGroup = this.fb.group({
    zigzagdraw: [false],
    prediction: [false],
    zigzag: [10,Validators.required],
    error: [10,Validators.required],
    patterns: [this.fb.array(this.subgroup)]
  });
  onSubmit(){
    // this.signalr.OnClick(this.signalSettingForm);
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
