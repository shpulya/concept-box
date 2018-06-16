import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let auth = JSON.parse(localStorage.getItem('authHeader'));
        if (auth) {
            request = request.clone({
                headers: new HttpHeaders({
                  'Content-Type':  'application/json',
                  'Authorization': `Basic ${auth}`
                })
            });
        }
        return next.handle(request);
    }
}
