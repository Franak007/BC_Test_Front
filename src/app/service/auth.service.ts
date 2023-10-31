import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {Itoken, IUser} from "../interface/iuser";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url="https://127.0.0.1:8000/api";
  constructor( private route:Router, private http: HttpClient ) { }

  login(credentials:any): Observable<Itoken> {
    return this.http.post<Itoken>(this.url+"/login_check", credentials);
  }

  saveToken(token:string){
    localStorage.setItem('token',token);
    this.route.navigate(['/']);
  }

  isLogged():boolean{
    const token = localStorage.getItem('token');
    return !! token;
  }

  clearToken(){
    localStorage.removeItem('token');
    this.route.navigate(['/']);
  }

  getToken(){
    return localStorage.getItem('token');
  }

  // getUserIdFromToken(): number | null {
  //   const token = this.getJwtToken();
  //   if (token) {
  //     const decodedToken = jwt_decode(token);
  //     return decodedToken.sub;
  //   } return null;
  // }
}
