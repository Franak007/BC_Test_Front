import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {Itoken, IUser} from "../interface/iuser";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
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
  getLoggedInUser(): any {
    const token = localStorage.getItem('token');
    if (token) {
      const tokenPayload = JSON.parse(atob(token.split('.')[1])); // Décodage du payload
      return tokenPayload; // Vous pouvez retourner les informations de l'utilisateur ici
    }
    return null; // Aucun utilisateur connecté ou token manquant
  }
  getLoggedInUserUsername(): string | null {
    const token = localStorage.getItem('token');
    if (token) {
      const tokenParts = token.split('.');
      if (tokenParts.length === 3) {
        const payload = JSON.parse(atob(tokenParts[1]));
        const username = payload.username; // Remplacez 'email' par la clé correcte dans votre payload
        console.log(username);
        return username;
      }
    }
    return null;
  }

}
