import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getUserRole } from 'src/app/Auth/management/user.selector';
import { AuthState } from 'src/app/Auth/management/user.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  flag$: Observable<string>;
  constructor(private store: Store<AuthState>) {
    this.flag$ = this.store.select(getUserRole);
  }

}
