import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable,of } from 'rxjs';

import { Ifeature,Iplan } from '../../Model/Ifeature.interface';

import { ManagerService } from '../../services/manager.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent {
  features$: Observable<Ifeature[]>;
  subgroup: AbstractControl[] = [];
  plans$: Observable<Iplan[]>
  constructor(private fb: FormBuilder, private features: ManagerService ) {
    // this.features$ = this.features.getFeatures();
    // this.plans$ = this.features.getPlans();
    this.features$ = of([{value: '1',desc: 'test1'},{value: '2',desc: 'test2'},{value: '3',desc: 'test3'}])
    this.plans$ = of([{id: '1',title: 'test1',price: '100',currencey: 'dollar',features: [{desc:'f1', value: '1'},{desc: 'f2', value: '2'}]},{id: '2',title: 'test2',price: '200',currencey: 'pond',features: [{desc:'f1', value: '1'},{desc: 'f2', value: '2'}]},{id: '3',title: 'test3',price: '300',currencey: 'Euro',features: [{desc:'f1', value: '1'},{desc: 'f2', value: '2'}]}])
  }

  featuresForm: FormGroup = this.fb.group({
    name: [],
    currencey: ['dollar'],
    price: [0],
    period: ['1M'],
    features: [this.fb.array(this.subgroup)]
  })

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
    this.featuresForm.get('features')?.setValue(this.subgroup);
  }

  onSubmit(){

  }
}
