import { Component } from '@angular/core';
import { EnrollmentService } from 'src/app/Services/enrollment.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent{

  constructor(private enroll: EnrollmentService) { }

  onSubmit(data: any){
    // this.enroll.subscribe(data);
  }
}
