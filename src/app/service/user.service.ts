import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUser} from "../interface/iuser";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<IUser[]>{
    return this.http.get<IUser[]>("https://127.0.0.1:8000/api/users")
  }

  getOneUser(id: number): Observable<IUser>{
    return this.http.get<IUser>("https://127.0.0.1:8000/api/users"+id)
  }

}
