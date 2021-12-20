import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})




export class ApiService {
  base_api_url = "https://jsonplaceholder.typicode.com/posts";

  constructor(private httpClient: HttpClient) {
  }


  //getApiData(): Observable<any> {
  //  return this.httpClient.get<any>(this.base_api_url);
  //}
  getApiData() {

    return this.httpClient.get<any>(this.base_api_url);
  }




}
