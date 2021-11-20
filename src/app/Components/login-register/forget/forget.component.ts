import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EnrollmentService } from 'src/app/Services/enrollment.service';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.scss']
})
export class ForgetComponent{

  constructor(private enroll: EnrollmentService, private builder: FormBuilder) { }
  @Output() page: EventEmitter<string> = new EventEmitter();
  forgetForm: FormGroup = this.builder.group({
    email: ['',Validators.required]
  })
  onSubmit(){
    this.enroll.forget(this.forgetForm.value).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (err: any) => {
        console.error(err);
      }
    })
  }
  navigate(page: string){
    this.page.emit(page);
  }
}
