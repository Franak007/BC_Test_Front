import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {INft} from "../../interface/inft";
import {NftService} from "../../service/nft.service";
import {Observable} from "rxjs";
import {UserService} from "../../service/user.service";
import {IUser} from "../../interface/iuser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit{

  constructor(private nfts: NftService, private users: UserService) { }

  nftsList: INft[] = [];
  usersList: IUser[] = [];
  selectedUser:IUser|undefined;

    ngOnInit(){
    this.getNfts();
    this.getUsers();
  }

  getNfts(){

    this.nfts.getAllNfts().subscribe(data=>{
      this.nftsList = data;
      return this.nftsList;
    })
  }

  getUsers(){

    this.users.getAllUsers().subscribe(data=>{
      this.usersList = data;
      return this.usersList;
    })
  }

  getNftUserId(url: string){

    let nftUserId = Number(url.charAt(url.length - 1))-1;
    return nftUserId;
  }


}
