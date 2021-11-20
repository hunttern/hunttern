import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { EnrollmentService } from 'src/app/Services/enrollment.service';
import { checkPassword } from './Custome';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{
  
  constructor(private enroll: EnrollmentService, private builder: FormBuilder){}
  @Output() page: EventEmitter<string> = new EventEmitter();
  registerForm = this.builder.group({
    fullname: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, {validator: checkPassword})
  onSubmit(){
    this.enroll.register(this.registerForm.value).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (err: any) => {
        console.error(err)
      }
    })
  }
  navigate(page: string){
    this.page.emit(page);
  }
}
