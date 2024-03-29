import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthResponseData, User } from '../management/users.model';
import { environment } from 'src/environments/environment.prod';

@Injectable()
export class AuthService {

  private baseurl: string = environment.baseurl + '/api/Account/';

  user = new BehaviorSubject<User|null>(null);
  
  constructor(private http: HttpClient) { }

  login(data: {email: string, password: string}): Observable<AuthResponseData>{
    return this.http.post<AuthResponseData>(this.baseurl+'login',data);
  }
  register(data: {email: string, password: string}){
    return this.http.post(this.baseurl+'register',data);
  }
  forget(data: any){
    return this.http.post(this.baseurl+'forget',data);
  }
  formatUser(data: any){
    // const expDate = new Date(new Date().getTime() + +data.exireDate * 1000);
    const user = new User(data.data.token.refreshToken,data.data.token.accessToken, data.data.roles);
    this.user.next(user);
    return user;
  }
}
