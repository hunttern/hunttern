import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { Ifeature } from 'src/app/admin/Model/Ifeature.interface';
import { ManagerService } from 'src/app/admin/services/manager.service';

enum Currency
{
    USD,
    EUR
}

enum Period
{
    Month,
    Year
} 
@Component({
  selector: 'app-edit-modal',
  templateUrl: './edit-modal.component.html',
  styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent {
  id: string ='';
  features$: Observable<Ifeature[]>;
  subgroup: AbstractControl[] = [];
  
  constructor(private activeModal: NgbActiveModal,private fb: FormBuilder,private features: ManagerService ) {
    this.features$ = this.features.getFeatures();
  }
  featuresForm: FormGroup = this.fb.group({
    id: [this.id],
    name: [],
    currency: ['0'],
    amount: [0],
    period: ['01'],
    descriptions: [[]],
    features: [this.fb.array(this.subgroup)]
  });
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
    this.featuresForm.get('id')?.setValue(this.id)
    this.features.editPlan(this.id,this.featuresForm).subscribe(console.log);
    this.activeModal.close();
  }
  onCancel(){
    this.activeModal.close();
  }
}
