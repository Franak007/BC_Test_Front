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

  constructor(private auth: AuthService, public user: UserService) { }

  users:IUser[] = [] ;

  ngOnInit(){
    this.getusers();
  }
  logout(){
    this.auth.clearToken();
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

}
