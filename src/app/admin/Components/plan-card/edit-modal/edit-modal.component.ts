import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent {
  features: {value: string, desc: string}[];
  subgroup: AbstractControl[] = [];
  
  constructor(private activeModal: NgbActiveModal,private fb: FormBuilder) { }
  featuresForm: FormGroup = this.fb.group({
    name: [],
    currencey: ['dollar'],
    price: [0],
    period: ['1M'],
    features: [this.fb.array(this.subgroup)]
  });
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
  onSubmit(){}
}
