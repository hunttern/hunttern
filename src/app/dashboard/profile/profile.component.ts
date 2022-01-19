import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  @Input() username: string = 'saeed';

  image: string;
  leftdays: number = 25;

  constructor(private modal: NgbModal){}

  openChange(){
    const modalRef = this.modal.open(ChangepasswordComponent);
    modalRef.closed.subscribe(res => console.log(res));
  }
}
