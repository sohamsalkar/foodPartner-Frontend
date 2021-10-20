import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodUser } from './food-user';

@Injectable({
  providedIn: 'root'
})
export class FoodPartnerServiceService {

  //private baseUrl : string = "http://localhost:8085"
  private baseUrl : string = "http://192.168.1.100:8085"
  constructor(private http:HttpClient) { }

  getUser(username:string,password:string):Observable<FoodUser>{
    const headers = new HttpHeaders({ Authorization: 'Basic ' + btoa(username + ':' + password) });
    return this.http.get<FoodUser>(`${this.baseUrl}/check/user`,{headers});
  }


}
