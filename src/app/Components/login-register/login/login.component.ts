import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';


import { Store } from '@ngrx/store';
import { LoginRegisterComponent } from '../login-register.component';
import { loginStart } from '../management/user.action';
import { User } from '../management/users.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private builder: FormBuilder,private dialog: MatDialogRef<LoginRegisterComponent>,private store: Store<{user: User}>){}
  @Output() page: EventEmitter<string> = new EventEmitter();
  loginForm: FormGroup = this.builder.group({
    fullname: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  onSubmit(){
    this.store.dispatch(loginStart({loginForm: this.loginForm}));
    this.dialog.close();
  }
  navigate(page: string){
    this.page.emit(page);
  }
  close(){
    this.dialog.close();
  }
}
