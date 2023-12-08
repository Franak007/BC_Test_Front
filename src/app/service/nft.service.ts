import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {INft} from "../interface/inft";
import {IUser} from "../interface/iuser";

@Injectable({
  providedIn: 'root'
})
export class NftService {

  url: string = "https://127.0.0.1:8000";
  // url: string = "http://api-businesscasefp.atwebpages.com";

  constructor(private http: HttpClient) { }


  getAllNfts(): Observable<INft[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.get<INft[]>(this.url+"/api/nfts", {'headers' : headers});
  }

  getOneNft(id: number|any): Observable<INft>{
    return this.http.get<INft>(this.url+"/api/nfts/"+id)
  }

  getOneUserByRoute(route:string): Observable<INft>{
    return this.http.get<INft>(this.url+route)
  }

}
