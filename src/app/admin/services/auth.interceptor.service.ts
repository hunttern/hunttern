import { HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { ManagerService } from "./manager.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor{
    token: string;
    constructor(private store: Store<any>,private managerService: ManagerService){
        this.token = managerService.getToken();
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req.clone({params: new HttpParams().set("Authorization", `bearer ${this.token}`)}));
    }
}