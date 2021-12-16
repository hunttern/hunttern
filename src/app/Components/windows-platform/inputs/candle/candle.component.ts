import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-candle',
  templateUrl: './candle.component.html',
  styleUrls: ['./candle.component.scss']
})
export class CandleComponent {

  @Output() candlePatterns: EventEmitter<{form:FormGroup, type: string}> = new EventEmitter();
  
  subgroup: AbstractControl[] = [];

  constructor(private fb: FormBuilder) { }

  patterns: Array<{name: string, value: string}> = [
    {name: "3BLACKCROWS", value: "3BLACKCROWS"},
    {name: "3WHITESOLDIERS", value: "3WHITESOLDIERS"},
    {name: "DARKCLOUDCOVER", value: "DARKCLOUDCOVER"},
    {name: "DOJI", value: "DOJI"},
    {name: "DOJISTAR", value: "DOJISTAR"},
    {name: "DRAGONFLYDOJI", value: "DRAGONFLYDOJI"},
    {name: "ENGULFING", value: "ENGULFING"},
    {name: "EVENINGDOJISTAR", value: "EVENINGDOJISTAR"},
    {name: "EVENINGSTAR", value: "EVENINGSTAR"},
    {name: "HAMMER", value: "HAMMER"},
    {name: "HANGINGMAN", value: "HANGINGMAN"},
    {name: "HARAMI", value: "HARAMI"},
    {name: "MARUBOZU", value: "MARUBOZU"},
    {name: "MORNINGSTAR", value: "MORNINGSTAR"},
    {name: "PIERCING", value: "PIERCING"},
    {name: "SHOOTINGSTAR", value: "SHOOTINGSTAR"}
  ];
  signalSettingForm: FormGroup = this.fb.group({
    patterns: [this.fb.array(this.subgroup)]
  });
  onSubmit(){
    const result = {form:this.signalSettingForm,type: 'classic'};
    this.candlePatterns.emit(result);
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
