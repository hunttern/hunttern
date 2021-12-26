import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ifeature, Iplan } from '../Model/Ifeature.interface';
import { FormGroup } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  private baseUrl: string = 'http://195.248.243.186:5000/api/';
  constructor(private http: HttpClient) {}
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
    console.log(id)
    console.log(newPlan.value)
    return this.http.put(this.baseUrl+'Plans/'+`${id}`,newPlan.value);
  }
}
