import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpProgressEvent, HttpRequest, HttpResponse, HttpSentEvent, HttpUserEvent } from '@angular/common/http';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {
        // add auth header with jwt if account is logged in and request is to the api url
        const token = localStorage.getItem('token');
        const isLoggedIn = req.clone({ headers: req.headers.set('Authorization', 'Bearer' + token) });
        // if (req.url.indexOf(config.api) >= 0) {
            return next.handle(isLoggedIn);
        // }


        return next.handle(req);
    }
}