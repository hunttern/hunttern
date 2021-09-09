import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EnrollmentService } from 'src/app/Services/enrollment.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private enroll: EnrollmentService, private builder: FormBuilder){}

  loginForm: FormGroup = this.builder.group({
    fullname: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  onSubmit(){
    this.enroll.login(this.loginForm.value).subscribe({
      next: (data: any) => {
        localStorage.setItem('Token', data.accessToken);
      },
      error: (err: any) => {
        console.error(err)
      }
    })
  }
}
