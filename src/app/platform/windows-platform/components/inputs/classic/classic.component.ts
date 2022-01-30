import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-classic',
  templateUrl: './classic.component.html',
  styleUrls: ['./classic.component.scss']
})
export class ClassicComponent {

  @Output() classicPatterns: EventEmitter<{form:FormGroup, type: string}> = new EventEmitter();
  
  subgroup: AbstractControl[] = [];

  constructor(private fb: FormBuilder) { }

  patterns: Array<{name: string, value: string}> = [
    {name: "Head & Shoulders", value: "Head_and_Shoulders"},
    {name: "Double", value: "Double"},
    {name: "Triple", value: "Triple"},
    {name: "Cup", value: "cup"},
    {name: "Rectangle", value: "Rectangle"},
    {name: "Triangle", value: "Triangle"},
    {name: "Flag", value: "Flag"},
    {name: "Wedge", value: "Wedge"}
  ];
  signalSettingForm: FormGroup = this.fb.group({
    patterns: [this.fb.array(this.subgroup)]
  });
  onSubmit(){
    const result = {form:this.signalSettingForm,type: 'classic'};
    this.classicPatterns.emit(result);
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
