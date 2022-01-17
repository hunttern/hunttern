import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getLoading } from 'src/app/Shared/state/shared.selector';
import { iAppState } from 'src/app/State/app.state';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent {
  loading$: Observable<boolean>;
  constructor(private store: Store<iAppState>) {
    this.loading$ = this.store.select(getLoading);
  }
  form: string = "login";
  changePage(page: string){
    this.form = page;
  }
}
