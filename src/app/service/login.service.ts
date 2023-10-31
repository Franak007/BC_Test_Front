import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Itoken, IUser} from "../interface/iuser";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url="https://127.0.0.1:8000/api/login_check";

  constructor(private http: HttpClient) { }
  login(credentials:any): Observable<Itoken> {
    return this.http.post<Itoken>(this.url, credentials);
  }
}
