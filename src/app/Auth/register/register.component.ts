import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginRegisterComponent } from '../login-register.component';
import { AuthService } from '../Services/auth.service';
import { checkPassword } from './Custome';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{
  
  constructor(private builder: FormBuilder,private dialog: MatDialogRef<LoginRegisterComponent>,private registerService: AuthService){}
  @Output() page: EventEmitter<string> = new EventEmitter();
  registerForm = this.builder.group({
    fullname: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, {validator: checkPassword})
  onSubmit(){
    this.registerService.register(this.registerForm).subscribe();
    this.dialog.close();
  }
  navigate(page: string){
    this.page.emit(page);
  }
  close(){
    this.dialog.close();
  }
}
