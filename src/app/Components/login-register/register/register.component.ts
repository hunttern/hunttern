import { Component } from '@angular/core';
import { EnrollmentService } from 'src/app/Services/enrollment.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{
  
  constructor(private enroll: EnrollmentService){}
  onSubmit(data:any){
    // this.enroll.subscribe(data);
  }

}
