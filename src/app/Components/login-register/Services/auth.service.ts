import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthResponseData, User } from '../management/users.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseurl: string = 'http://hunttern.com/api/Account/';

  user = new BehaviorSubject<User|null>(null);
  
  constructor(private http: HttpClient) { }

  login(data: {email: string, password: string}): Observable<AuthResponseData>{
    return this.http.post<AuthResponseData>(this.baseurl+'login',data);
  }
  register(data: FormGroup){
    const registerData = data.value;
    return this.http.post(this.baseurl+'register',registerData);
  }
  forget(data: any){
    return this.http.post(this.baseurl+'forget',data);
  }
  formatUser(data: any){
    // const expDate = new Date(new Date().getTime() + +data.exireDate * 1000);
    const user = new User(data.data.refreshToken,data.data.accessToken);
    this.user.next(user);
    return user;
  }
}
