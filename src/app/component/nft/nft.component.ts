import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../service/auth.service";
import {IUser} from "../../interface/iuser";
import {INft} from "../../interface/inft";
import {NftService} from "../../service/nft.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-nft',
  templateUrl: './nft.component.html',
  styleUrls: ['./nft.component.css']
})
export class NftComponent implements OnInit{

  constructor(private user: UserService, private route: ActivatedRoute, private auth: AuthService,private nfts: NftService,) {
  }

  selectedUser: IUser | undefined;
  userNFTS: INft[] = [];
  userData: any = [];
  nftIds: number[] = [];
  message: string = '';



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
        console.log('Données de l\'utilisateur connecté :', userData?.id);
        let  table: any[] = []
        let tableNft: INft[] = []
        let  newElement: string = ""
        userData?.nfts.forEach(function (element){
            newElement = element.replace("/api/nfts/","");
            table.push(newElement);
        })
        this.userData = userData;
        this.nftIds = table;
        this.nftIds.forEach((element) =>{
          this.nfts.getOneNft(element).subscribe(data=>{
            tableNft.push(data)
          })
        })
        this.userNFTS = tableNft
      },
      (error) => {
        console.error('Erreur lors de la récupération des données de l\'utilisateur :', error);
      }
    );
  }
  //
  // public form: FormGroup = new FormGroup({
  //   user: new FormControl('/api/users/'+this.userData.id),
  //   title: new FormControl(''),
  //   price: new FormControl(''),
  //   imagePath: new FormControl(''),
  //   description: new FormControl(''),
  //   createdAt: new FormControl('')
  //
  // })
  //
  // onSubmit(){
  //   console.log(this.form);
  //   this.nfts.addNft(this.form.value).subscribe({
  //     complete:()=>{
  //       this.message = "NFT ajouté";
  //       this.form.reset();
  //       this.getUserData();
  //     },
  //     error:()=>this.message = "Erreur, NFT non créé"
  //   })
  // }
  //
  deleteNft(id: number, index: number){
    this.nfts.deleteNft(id).subscribe(message=>{
      this.userNFTS.splice(index, 1);
    })
  }

}
