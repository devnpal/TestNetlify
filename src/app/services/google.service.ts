import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class GoogleService {

  Url: string = 'http://dummy.restapiexample.com/api/v1';

  creatUrl = 'http://dummy.restapiexample.com';

  baseUrl = 'https://jsonplaceholder.typicode.com';

  //header: HttpHeaders = {
  //  "Access-Control-Allow-Origin": "*",
  //}

  

   Options = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      'Content-type': 'application/json',
      'charset':'UTF-8'

    })
  }
  

  constructor(private http: HttpClient) {

   
  }

  getAllUser(): Observable<any> {
   return this.http.get<any>(this.Url +'/employees');
  }


  createUser(body: any): Observable<any> {
    return this.http.post<any>(this.creatUrl + '/create', body, this.Options);
  }

  createPosts(body: any): Observable<any> {
    return this.http.post<any>(this.baseUrl + '/posts', body, this.Options);
  }
  
}
