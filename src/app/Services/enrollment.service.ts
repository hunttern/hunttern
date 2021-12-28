import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  constructor(private http: HttpClient) { }

  private baseurl: string = 'http://195.248.243.186:5000/';

  subscribe(email: string){
    this.http.post(this.baseurl,email);
  }
}