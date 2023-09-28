import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {INft} from "../interface/inft";
import {IUser} from "../interface/iuser";

@Injectable({
  providedIn: 'root'
})
export class NftService {

  constructor(private http: HttpClient) { }

  getAllNfts(): Observable<INft[]> {
    return this.http.get<INft[]>("http://api-businesscasefp.atwebpages.com/api/nfts");
  }


  getOneUserByRoute(route:string): Observable<INft>{
    return this.http.get<INft>("https://127.0.0.1:8000"+route)
  }

}
