import { Component } from '@angular/core';
import { EnrollmentService } from 'src/app/Services/enrollment.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent{

  constructor(private enroll: EnrollmentService){}

  email: string;
  onSubmit(data: any){
    console.log(data)
    // this.enroll.subscribe(data);
  }
}
