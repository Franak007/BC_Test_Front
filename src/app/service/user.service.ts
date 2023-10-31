import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../interface/iuser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "https://127.0.0.1:8000/api/users";
  // url: string = "http://api-businesscasefp.atwebpages.com";

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>(this.url)
  }

  getOneUser(id: number): Observable<IUser>{
    return this.http.get<IUser>(this.url+"/"+id)
  }

  addUser(user: IUser) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(user);
    return this.http.post<IUser>(this.url, body,
      {'headers' : headers});

  }

}
