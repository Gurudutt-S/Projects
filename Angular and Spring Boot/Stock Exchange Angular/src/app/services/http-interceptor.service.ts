import { Injectable } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(public auth: AuthServiceService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log("inside Interceptor");
    if (this.auth.getAuthenticationToken()) {
      //request object cannot be directly manipulated 
      //it has to be cloned
      let getAuthenticationToken = this.auth.getAuthenticationToken();
      request = request.clone({
        setHeaders: {
          Authorization: getAuthenticationToken
        }
      });
    }
    return next.handle(request);

  }

}
