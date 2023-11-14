import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {IUser} from "../interface/iuser";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = "https://127.0.0.1:8000/api";
  // url: string = "http://api-businesscasefp.atwebpages.com";

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllUsers(): Observable<IUser[]>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<IUser[]>(this.url+"/users/", {'headers' : headers})
  }
  getUserData(): Observable<IUser | undefined> {
    return this.getAllUsers().pipe(
      map((users: IUser[]) => {
        const loggedInUserUsername = this.authService.getLoggedInUserUsername(); // Remplacez par la méthode appropriée pour obtenir l'e-mail de l'utilisateur connecté
        return users.find(user => user.username === loggedInUserUsername);
      })
    );
  }
  addUser(user: IUser) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify(user);
    return this.http.post<IUser>(this.url+"/users/", body,
      {'headers' : headers});
  }

  getUser(): Observable<IUser[]>{
    return this.http.get<IUser[]>("https://127.0.0.1:8000/api/user/whoami");
  }


  getOneUser(id: number): Observable<IUser>{
    return this.http.get<IUser>(this.url+"/users/"+id)
  }

}
