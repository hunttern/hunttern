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

  //features
  getFeatures(): Observable<Ifeature[]>{
    return this.http.get<Ifeature[]>(this.baseUrl+'Features',{headers: this.reqheader});
  }
  getFeatureyId(id: string){
    return this.http.get(this.baseUrl+'Features/'+id,{headers: this.reqheader});
  }
  addFeature(feature: {name: string, value: string}){
    return this.http.post(this.baseUrl+'Features',feature,{headers: this.reqheader});
  }
  updateFeature(feature: {id: string,name: string, value: string}){
    return this.http.put(this.baseUrl+'Features/'+feature.id,feature,{headers: this.reqheader});
  }
  deleteFeatures(id: string){
    return this.http.delete(this.baseUrl+'Features/'+id,{headers: this.reqheader});
  }

  //Plans
  getPlans(): Observable<Iplan[]>{
    return this.http.get<Iplan[]>(this.baseUrl+'Plans',{headers: this.reqheader});
  }
  addPlan(plan: FormGroup){
    const newPlan = plan.value;
    return this.http.post(this.baseUrl+'Plans',plan.value,{headers: this.reqheader});
  }
  deletePlan(id: string){
    return this.http.delete(this.baseUrl+'Plans/'+`${id}`,{headers: this.reqheader});
  }
  editPlan(id: string,newPlan: FormGroup){
    return this.http.put(this.baseUrl+'Plans/'+`${id}`,newPlan.value,{headers: this.reqheader});
  }
  
  getToken(){
    let token: string = '';
    this.store.select('auth').subscribe(data => {
      token = data.user.localId;
    });
    return token;
  }
  
  //Users
  getUsers(){
    const url: string = 'User/GetUsers';
    return this.http.get<Iuser[]>(this.baseUrl+ url,{headers: this.reqheader});
  }
  addUser(user:{email: string, password: string,confirmPassword: string, roleId: string}){
    const url: string = 'User/Create';
    return this.http.post(this.baseUrl+ url,user,{headers: this.reqheader});
  }
  removeUser(id: string){
    const url: string = `User/Remove?id=${id}`;
    return this.http.delete(this.baseUrl+ url,{headers: this.reqheader});
  }
  // updateRoleUser(id: string, user: {id: string, roleIds: string[]}){
  //   const url: string = `User/Remove?id=${id}`;
  //   return this.http.delete(this.baseUrl+ url,{headers: this.reqheader});
  // }

  // Roles
  addRole(roleName: {name: string}){
    const url: string = 'http://195.248.243.186:5000/Role';
    this.http.post(url,roleName, {headers: this.reqheader});
  }
  getRoles(){
    const url: string = 'http://195.248.243.186:5000/Role';
    this.http.get(url,{headers: this.reqheader});
  }
  deleteRole(id: string){
    const url: string = `http://195.248.243.186:5000/Role/${id}`;
    this.http.delete(url,{headers: this.reqheader});
  }
}

