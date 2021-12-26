import { Component, Input } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Ifeature } from '../../Model/Ifeature.interface';
import { ManagerService } from '../../services/manager.service';
import { EditModalComponent } from './edit-modal/edit-modal.component';

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
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss']
})
export class PlanCardComponent {

  @Input() id: string = '';
  @Input() name: string = '';
  @Input() amount: number = 0;
  @Input() currency: Currency = 0;
  @Input() features: Ifeature[];
  test = Currency[this.currency];
constructor(private modal: NgbModal, private deletePlan: ManagerService) {}

  onEdit(){
    let ngbModalOptions: NgbModalOptions = {
      backdrop : 'static',
      keyboard : false
    };
    const modalRef = this.modal.open(EditModalComponent,ngbModalOptions);
    modalRef.componentInstance.id = this.id;
    modalRef.result.then((res: any) => {
      if(res)
      console.log(res)
    })
  }
  onDelete(){
    console.log(this.id)
    this.deletePlan.deletePlan(this.id).subscribe(console.log);
  }
}
