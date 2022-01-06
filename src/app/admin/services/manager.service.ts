import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ifeature, Iplan } from '../Model/Ifeature.interface';
import { FormGroup } from '@angular/forms';
import { Iuser } from '../Model/IUser.model';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  private baseUrl: string = 'http://195.248.243.186:5000/api/';
  constructor(private http: HttpClient,private store: Store<any>) {}
  getFeatures(): Observable<Ifeature[]>{
    return this.http.get<Ifeature[]>(this.baseUrl+'Features');
  }
  getPlans(): Observable<Iplan[]>{
    return this.http.get<Iplan[]>(this.baseUrl+'Plans');
  }
  addPlan(plan: FormGroup){
    const newPlan = plan.value;
    return this.http.post(this.baseUrl+'Plans',plan.value);
  }
  addFeature(feature: FormGroup){
    return this.http.post(this.baseUrl+'Features',feature.value);
  }
  deletePlan(id: string){
    return this.http.delete(this.baseUrl+'Plans/'+`${id}`);
  }
  editPlan(id: string,newPlan: FormGroup){
    return this.http.put(this.baseUrl+'Plans/'+`${id}`,newPlan.value);
  }
  getUsers(){
    const token = this.getToken();
    var reqheader = new HttpHeaders().set("Authorization", `bearer ${token}`);
    return this.http.get<Iuser[]>(this.baseUrl+'Account/GetUsers',{headers: reqheader});
  }

  getToken(){
    let token: string = '';
    this.store.select('auth').subscribe(data => {
      token = data.user.localId;
    });
    return token;
  }
}
