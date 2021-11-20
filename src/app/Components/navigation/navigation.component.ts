import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EnrollmentService } from 'src/app/Services/enrollment.service';
import { LoginRegisterComponent } from '../login-register/login-register.component';
import { LoginComponent } from '../login-register/login/login.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent{

  @Input() linkColor: string = '#191633';

  dialog: MatDialogRef<LoginRegisterComponent>;

  constructor(private _dialog: MatDialog,private enroll: EnrollmentService, private _router: Router) {}

  openLogin(){
    this.dialog = this._dialog.open(LoginRegisterComponent,{
      disableClose: true
    });
    this.dialog.afterClosed().subscribe((res: FormGroup) => {
      this.enroll.login(res.value).subscribe({
        next: (data: any) => {
          localStorage.setItem('Token', data.accessToken);
        },
        error: (err: any) => {
          console.error(err)
        }
      })
    })
  }
}
