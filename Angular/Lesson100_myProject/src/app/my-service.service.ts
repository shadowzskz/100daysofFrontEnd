import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  /** Services */  
  showTodayDate() {
    let nDate = new Date();
    return nDate.toLocaleDateString();
  }
  /** Services */

  /** Http Client */
  private privateData = [];
  private apiurl = 'http://jsonplaceholder.typicode.com/users'

  constructor( private http: HttpClient) {}  

  getData() {
    return this.http.get(this.apiurl);
  }
  /** Http Client */
}
