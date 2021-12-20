import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ifeature } from '../Model/Ifeature.interface';


@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  private baseUrl: string = '';
  constructor(private http: HttpClient) {}
  getFeatures(): Observable<Ifeature[]>{
    return this.http.get<Ifeature[]>(this.baseUrl+'');
  }
}
