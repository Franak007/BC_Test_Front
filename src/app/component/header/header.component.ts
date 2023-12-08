import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {UserService} from "../../service/user.service";
import {IUser} from "../../interface/iuser";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  userData: any;
  users:IUser[] = [] ;
  selectedUser:IUser|undefined;

  constructor(private auth: AuthService, public user: UserService) { }

  ngOnInit(){
    this.getUserData();
  }
  logout(){
    this.auth.clearToken();
    this.userData = "";
  }

  checkIsLogged(): boolean {
    return this.auth.isLogged();
  }

  getusers(){
    this.user.getAllUsers().subscribe(data =>{
      this.users = data;
      return this.users;
    })
  }

  selectUser(id:number) {
    this.user.getOneUser(id).subscribe(data=>{
      this.selectedUser = data;
      console.log(this.selectedUser);
    })
  }

  getUserData() {
    this.user.getUserData().subscribe(
      (userData) => {
        console.log('Données de l\'utilisateur connecté :', userData);
        this.userData = userData;
        console.log(userData);
      },
      (error) => {
        console.error('Erreur lors de la récupération des données de l\'utilisateur :', error);
      }
    );
  }
}
