import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EnrollmentService } from 'src/app/Services/enrollment.service';
import { checkPassword } from './Custome';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent{
  
  constructor(private builder: FormBuilder,private activeModal: NgbActiveModal,private registerService: EnrollmentService){}
  @Output() page: EventEmitter<string> = new EventEmitter();
  registerForm = this.builder.group({
    fullname: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  }, {validator: checkPassword})
  onSubmit(){
    this.registerService.register(this.registerForm).subscribe();
    this.activeModal.close(this.registerForm);
  }
  navigate(page: string){
    this.page.emit(page);
  }
  close(){
    this.activeModal.close();
  }
}
