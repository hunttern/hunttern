import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditModalComponent } from './edit-modal/edit-modal.component';

@Component({
  selector: 'app-plan-card',
  templateUrl: './plan-card.component.html',
  styleUrls: ['./plan-card.component.scss']
})
export class PlanCardComponent {

  @Input() title: string = '';
  @Input() price: string = '';
  @Input() currencey: string = '';
  @Input() features: {value: string, desc: string}[];
  
constructor(private modal: NgbModal) {}

  onEdit(){
    const modalRef = this.modal.open(EditModalComponent);
    modalRef.componentInstance.features = this.features;
    modalRef.result.then((res: any) => {
      if(res)
      console.log(res)
    })
  }
  onDelete(){
    
  }
}
