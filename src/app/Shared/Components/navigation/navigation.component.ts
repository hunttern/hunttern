import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EnrollmentService } from 'src/app/Services/enrollment.service';
import { LoginRegisterComponent } from 'src/app/Components/login-register/login-register.component';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent{

  @Input() linkColor: string = '#191633';

  constructor(private enroll: EnrollmentService, private modal: NgbModal) {}

  openLogin(){
    const modalRef = this.modal.open(LoginRegisterComponent);
    modalRef.result.then((res: any) => {
      if(res){
        // this.enroll.login(res);
        console.log("Login");
      }
    });
  }
}
