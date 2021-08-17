import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  constructor(private http: HttpClient) { }

  private url: string = '';
  Token = localStorage.getItem('userToken');
  reqheader = new HttpHeaders().set("Authorization", `Token ${this.Token}`);
  subscribe(email: string){
    this.http.post(this.url,email, {headers: this.reqheader});
  }
  getData(){
    this.http.get(this.url);
  }
}