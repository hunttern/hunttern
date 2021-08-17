import { Component } from '@angular/core';
import { EnrollmentService } from 'src/app/Services/enrollment.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private enroll: EnrollmentService){}
  onSubmit(data:any){
    // this.enroll.subscribe(data);
  }
}
