import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {IUser} from "../../interface/iuser";
import {INft} from "../../interface/inft";
import {NftService} from "../../service/nft.service";

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.css']
})
export class NftComponent implements OnInit{

  constructor(private user: UserService, private route: ActivatedRoute, private auth: AuthService,private nfts: NftService,) {
  }

  selectedUser: IUser | undefined;
  userNFTS: INft[] | undefined;
  userData: any;
  nftIds: any[] = [];

  ngOnInit() {

    this.getUserData();
  }

  getUserData() {
    this.user.getUserData().subscribe(
      (userData) => {
        this.route.params.subscribe(params =>
          this.user.getOneUser(userData?.id).subscribe(data => {
              this.selectedUser = data;
              return this.selectedUser;
            }
          )
        )
        console.log('Données de l\'utilisateur connecté :', userData?.nfts);
        let  table: any[] = []
        let tableNft: INft[] = []
        let  newElement: string = ""
        userData?.nfts.forEach(function (element){
            newElement = element.replace("/api/nfts/","");
            table.push(newElement);
        })
        this.userData = userData;
        console.log(userData);
        this.nftIds = table;
        console.log(this.nftIds);
        this.nftIds.forEach((element) =>{
          this.nfts.getOneNft(element).subscribe(data=>{
            tableNft.push(data)
          })
        })
        this.userNFTS = tableNft
        console.log(this.userNFTS)
      },
      (error) => {
        console.error('Erreur lors de la récupération des données de l\'utilisateur :', error);
      }
    );
  }

}
