import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ifeature, Iplan } from '../Model/Ifeature.interface';
import { FormGroup } from '@angular/forms';
import { Iuser } from '../Model/IUser.model';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  private baseUrl: string = environment.baseurl + '/api/';
  token = this.getToken();
  reqheader = new HttpHeaders().set("Authorization", `bearer ${this.token}`);
  constructor(private http: HttpClient,private store: Store<any>) {}
  getFeatures(): Observable<Ifeature[]>{
    return this.http.get<Ifeature[]>(this.baseUrl+'Features',{headers: this.reqheader});
  }
  getPlans(): Observable<Iplan[]>{
    return this.http.get<Iplan[]>(this.baseUrl+'Plans',{headers: this.reqheader});
  }
  addPlan(plan: FormGroup){
    const newPlan = plan.value;
    return this.http.post(this.baseUrl+'Plans',plan.value,{headers: this.reqheader});
  }
  addFeature(feature: FormGroup){
    return this.http.post(this.baseUrl+'Features',feature.value,{headers: this.reqheader});
  }
  deletePlan(id: string){
    return this.http.delete(this.baseUrl+'Plans/'+`${id}`,{headers: this.reqheader});
  }
  editPlan(id: string,newPlan: FormGroup){
    return this.http.put(this.baseUrl+'Plans/'+`${id}`,newPlan.value,{headers: this.reqheader});
  }
  getUsers(){
    return this.http.get<Iuser[]>(this.baseUrl+'Account/GetUsers',{headers: this.reqheader});
  }

  getToken(){
    let token: string = '';
    this.store.select('auth').subscribe(data => {
      token = data.user.localId;
    });
    return token;
  }
}
