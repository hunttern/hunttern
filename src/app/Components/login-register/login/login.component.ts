import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EnrollmentService } from 'src/app/Services/enrollment.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private builder: FormBuilder,private _dialog: MatDialogRef<LoginComponent>){}
  @Output() page: EventEmitter<string> = new EventEmitter();
  loginForm: FormGroup = this.builder.group({
    fullname: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  onSubmit(){
    this._dialog.close(this.loginForm.value);
  }
  navigate(page: string){
    this.page.emit(page);
  }
}
