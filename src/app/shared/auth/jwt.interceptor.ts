import { inject, Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
  })
export class JwtInterceptor implements HttpInterceptor{

    constructor(private auth: AuthService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // throw new Error("Method not implemented.");
        const curentUser= this.auth.currentUserValue;
        const isLoggedIn = curentUser && curentUser.token;
        const isAPI = req.url.startsWith(environment.api)
        // const token = localStorage.getItem('token')
        // console.log(token);
        
        // if(token && isAPI){
            
        //     req = req.clone({
        //         setHeaders:{
        //             // Authorization: `Bearer ${localStorage.getItem('token')}`
        //             Authorization: `Bearer ${token.replace(/\"\"/g, '')}`
        //         }
        //     })
        // }

        let token = localStorage.getItem('token');
        if (token) {
            token = token.replace(/^"(.*)"$/, '$1');
        }
        if (token) {
            req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
        }
    
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }
    
        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        console.log("............");
        return next.handle(req)
    }
    
}