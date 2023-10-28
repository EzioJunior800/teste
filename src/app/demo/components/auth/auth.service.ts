import { AdmService } from './../../../infra/adm-services/adm.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HostListener, Injectable } from '@angular/core';
import { UserEntity } from '../apps/domain/entities/user-entity';
import { environment } from '../apps/environments/environmentTest';
import { Observable, map, catchError, switchMap } from 'rxjs';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserPermissionService } from 'src/app/infra/services/user-permission.service';
import { throwError } from 'rxjs';

const credentialsKey = 'credentials';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor {
  apiUrlAdm = environment.apiUrlAdm;
  jwtHelper: JwtHelperService = new JwtHelperService();
  token: any;
  private userPermissions: any = {};
  private refreshTokenEndpoint = `${this.apiUrlAdm}/auth/refresh-token`;
  private usuario: UserEntity = {};
  userName: string;
  userId: number;
  userData: any[] = [];

  constructor(
    private http: HttpClient,
    private router: Router,
    private userPermissionService: UserPermissionService,
    private admService: AdmService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(987987987)
    const token = this.getTokenFromLocalStorage();
    if (token && this.isAccessTokenValid()) {
      request = this.addTokenToRequest(request, token);
    }

    if (token && !this.jwtHelper.isTokenExpired(token)) {
      request = this.addTokenToRequest(request, token);
    }
    return next.handle(request).pipe(
      catchError((error) => {
        if (error.status === 401 && token && !request.url.includes(this.refreshTokenEndpoint)) {
          return this.refreshAccessToken().pipe(
            switchMap((response) => {
              if (response.token) {
                this.storageToken(response.token);
                request = this.addTokenToRequest(request, response.token);
                return next.handle(request);
              } else {
                this.logout();
                return throwError('Atualização de token falhou.');
              }
            }),
            catchError(() => {
              this.logout();
              return throwError('Atualização de token falhou.');
            })
          );
        } else {
          return throwError(error);
        }
      })
    );
  }

  refreshAccessToken(): Observable<any> {
    const refreshToken = this.getRefreshTokenFromLocalStorage();
    if (!refreshToken) {
      return throwError('No refresh token found.');
    }

    const url = this.refreshTokenEndpoint;
    const body = { refreshToken: refreshToken };

    return this.http.post(url, body).pipe(
      map((data: any) => {
        if (data.token) {
          this.storageToken(data.token);
        }
        return data;
      })
    );
  }

  login(user: any): Observable<any> {
    let url = `${this.apiUrlAdm}/auth/login`;
    const base = this.http.post(url, user);

    return base.pipe(
      map((data: any) => {
        if (data.token && data.refresh_token) {
          this.userName = `${data.user.first_name} ${data.user.last_name}`;
          this.userId = data.user.id;
          this.userPermissionService.addUser(this.userId, this.userName).then(() => {
            this.fetchUserDataBox();
          });
          this.storageToken(data.token);
          this.storageRefreshToken(data.refresh_token);
        }
        return data;
      })
    );
  }


  logout(): void {
    console.log(888)
    const delSession: any = sessionStorage.getItem('sessionCount');
    this.userPermissionService.deleteUser(parseInt(delSession)).then((teste) => {
    });
    this.token = '';
    console.log('navigate')
    window.sessionStorage.removeItem('token');
    window.sessionStorage.removeItem('sessionCount');
    this.router.navigate(['/auth/login']);
  }

  fetchUserDataBox() {
    this.userPermissionService.getAllData().then((user: any) => {
      this.userData = user;
      sessionStorage.setItem('sessionCount', this.userData[0].id);
    });
  }

  setUserPermissions(permissions: any) {
    this.userPermissions = permissions;
  }

  getUserPermissions(): any {
    return this.userPermissions;
  }

  sendRecPwd(token: any): Observable<any> {
    const url = `${this.apiUrlAdm}/recovery-password/send-recovery-password-email`;
    const base = this.http.post(url, token);

    return base.pipe(
      map((data: any) => {
        if (data.token) {
          this.storageToken(data.token);
        }
        return data;
      })
    );
  }

  recPwd(a: any): Observable<any> {
    const url = `${this.apiUrlAdm}/recovery-password/send-recovery-password-email`;
    const base = this.http.post(url, a);

    return base.pipe(
      map((data: any) => {
        return data;
      })
    );
  }

  isAuthenticated(): boolean {
    return !!this.credentials;
  }

  get credentials(): UserEntity {
    return this.usuario;
  }

  set credentials(credentials: UserEntity) {
    this.usuario = credentials || null;
    if (credentials) {
      localStorage.setItem(credentialsKey, JSON.stringify(credentials));
    } else {
      localStorage.removeItem(credentialsKey);
    }
  }

  private isAccessTokenValid(): boolean {
    const token = this.getTokenFromLocalStorage();
    if (token) {
      return !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }

  private getTokenFromLocalStorage(): string | null {
    return sessionStorage.getItem('token');
  }

  private getRefreshTokenFromLocalStorage(): string | null {
    return localStorage.getItem('refreshToken');
  }

  private storageToken(token: string): void {
    sessionStorage.setItem('token', token);
    this.token = token;
  }

  private storageRefreshToken(refreshToken: string): void {
    localStorage.setItem('refreshToken', refreshToken);
  }

  private addTokenToRequest(request: HttpRequest<any>, token: string): HttpRequest<any> {
    return request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
}
