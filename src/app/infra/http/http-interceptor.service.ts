import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpInterceptor, HttpHandler, HttpRequest, } from '@angular/common/http';
import { Observable, throwError, catchError } from 'rxjs';
import { AuthService } from 'src/app/demo/components/auth/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor{

  constructor(public auth:AuthService) {}

  token: any;
  
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any>
  {  ​
    console.log('AuthInterceptorService')
    this.token = sessionStorage.getItem('token');
    if (this.token) 
    {​​
      const cloned = req.clone({​​
        headers: req.headers.set('Authorization', 'Bearer ' + this.token)
      }​​);
      return next
        .handle(cloned)
        .pipe(catchError((error: HttpErrorResponse) => {​​
        if (error.status === 401) {​​
          this.auth.logout();
        }​​
        if (!this.token) {​​
        }​​
        return throwError(error);
      }​​));
    }​​ else {
      this.auth.logout();
      return next.handle(req);
    }​​
  }​​
}
