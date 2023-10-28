import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/app/demo/components/apps/environments/environmentTest';
import { Adm } from 'src/app/demo/components/apps/domain/models/adm.module.component';
@Injectable({
  providedIn: 'root'
})
export class AdmService {

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${environment.token}`
    })
  }

  apiUrlAdm = environment.apiUrlAdm;
  params: any;
  
  constructor(private http: HttpClient, private router: Router) { }
    
  // getAdministrator(pageNumber: number, pageSize: number): Observable<any>{
  //   let url = `${this.apiUrlAdm}/administrator?page=${pageNumber}&size=${pageSize}`;
  //   const request = this.http.get<Adm>(url).pipe(
  //     tap(data => {
        
  //     })
  //   );
  //   return request
  // }

  getAdministrator(pageNumber: number, pageSize: number): Observable<any> {
    let url = `${this.apiUrlAdm}/administrator?page=${pageNumber}&size=${pageSize}`;
    return this.http.get<any>(url).pipe(
      map(response => {
        if (Array.isArray(response)) {
          return response.map((item: any) => {
            item.descriptionAdd = item.first_name;
            return item;
          });
        } else if (typeof response === 'object') {
          const modifiedResponse = { ...response };
          modifiedResponse.data = modifiedResponse.data.map((item: any) => {
            item.descriptionAdd = item.first_name;
            return item;
          });
          return modifiedResponse;
        }
        return response;
      })
    );             
  }
  
  getAdministratorById(userID: any): Observable<any> {
    const url = `${this.apiUrlAdm}/administrator/${userID}`;    
    return this.http.get<any>(url).pipe(
      tap(data => {
      })
      );             
  }

  createAdministrators(dataAdm: any): Observable<any> {
    let url = `${this.apiUrlAdm}/administrator`;
    this.params = {
    }
    const request = this.http.post<Adm>(url, this.params).pipe(
      tap(data => {
      })
    );
    return request;
  }


}
