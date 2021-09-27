import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  constructor(private http: HttpClient) { }

  private url: string = 'http://87.107.146.161:5000/api/account';
  private patternUrl: string = 'http://87.107.146.161:5000/api/Index?ShowZigZag=true&ShowPosition=true&ShowPrediction=true&ShowStatistic=true&ShowCandlePattern=true&PivotSensitivity=50&HarmonicError=3&RisktoReward=3';
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
    return this.http.get(this.url);
  }
  getPatterns(data: FormGroup){
    const form = data.value;
    // let param = new HttpParams();
    let extendedurl: string = '';
    form.patterns.forEach((item: any) => {
      // param = param.set("Patterns", item.value);
      extendedurl += "&Patterns=" + item.value;
    });
    return this.http.get(this.patternUrl + extendedurl);
  }
}