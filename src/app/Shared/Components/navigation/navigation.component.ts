import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { LoginRegisterComponent } from '../../../Auth/login-register.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent{

  @Input() linkColor: string = '#191633';
  navActive: boolean = false;
  product: boolean = false;

  constructor(private modal: NgbModal,private dialog: MatDialog) {}

  openLogin(){
    const dialogRef: MatDialogRef<LoginRegisterComponent> = this.dialog.open(LoginRegisterComponent);
    // const modalRef = this.modal.open(LoginRegisterComponent);
  }
  onBurger(){
    this.navActive = !this.navActive;
  }
  scroll(el: string){
    document.getElementById(el)?.scrollIntoView({behavior:"smooth"});
  }
}
