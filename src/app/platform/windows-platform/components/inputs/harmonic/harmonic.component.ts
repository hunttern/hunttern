import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-harmonic',
  templateUrl: './harmonic.component.html',
  styleUrls: ['./harmonic.component.scss']
})
export class HarmonicComponent {

  @Output() harmonicPatterns: EventEmitter<{form:FormGroup, type: string}> = new EventEmitter();
  
  subgroup: AbstractControl[] = [];

  constructor(private fb: FormBuilder) { }

  patterns: Array<{name: string, value: string}> = [
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
    {name: "5-0", value: "5-0"}
  ];
  signalSettingForm: FormGroup = this.fb.group({
    patterns: [this.fb.array(this.subgroup)]
  });
  onSubmit(){
    const result = {form:this.signalSettingForm,type: 'harmonic'};
    this.harmonicPatterns.emit(result);
  }
  onCheckboxChange(e: any) {
    if (e.checked) {
      this.subgroup.push(new FormControl(e.source.value));
    } else {
      this.subgroup.forEach((item: any, index: number) => {
        if (item.value == e.source.value) {
          this.subgroup.splice(index,1);
        }
      });
    }
    this.signalSettingForm.get('patterns')?.setValue(this.subgroup);
  }
}
