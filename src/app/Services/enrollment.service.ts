import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  constructor(private http: HttpClient) { }

  private url: string = 'http://87.107.146.161:5000/api/account';
  Token = localStorage.getItem('userToken');
  reqheader = new HttpHeaders().set("Authorization", `Token ${this.Token}`);
  subscribe(email: string){
    this.http.post(this.url,email, {headers: this.reqheader});
  }
  register(data: any){
    return this.http.post(this.url+'/register',data);
  }
  login(data: any){
    return this.http.post(this.url+'/login',data);
  }
  forget(data: any){
    return this.http.post(this.url+'/forget',data);
  }
  getData(){
    this.http.get(this.url);
  }
}