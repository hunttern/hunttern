import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable,of } from 'rxjs';

import { Ifeature } from '../../Model/Ifeature.interface';

import { ManagerService } from '../../services/manager.service';


@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.scss']
})
export class PlansComponent {
  features$: Observable<Ifeature[]>;
  subgroup: AbstractControl[] = [];

  constructor(private fb: FormBuilder, private features: ManagerService ) {
    // this.features$ = this.features.getFeatures();
    this.features$ = of([{value: '1',desc: 'test1'},{value: '2',desc: 'test2'},{value: '3',desc: 'test3'}])
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
