import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../interface/iuser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "http://api-businesscasefp.atwebpages.com"

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.url+"/api/users")
  }

  getOneUser(id: number): Observable<IUser>{
    return this.http.get<IUser>(this.url+"/api/users"+id)
  }

}
