import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, } from 'rxjs';

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
    this.features$ = this.features.getFeatures();
    this.plans$ = this.features.getPlans();
  }

  featuresForm: FormGroup = this.fb.group({
    name: [],
    currency: ['0'],
    amount: [0],
    period: ['01'],
    descriptions: [[]],
    features: [this.fb.array(this.subgroup)]
  })

  onCheckboxChange(e: any) {
    if (e.target.checked) {
      this.subgroup.push((new FormControl(e.target.value)).value);
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
    this.features.addPlan(this.featuresForm).subscribe(console.log);
  }
}
