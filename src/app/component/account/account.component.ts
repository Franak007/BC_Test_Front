import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {ActivatedRoute} from "@angular/router";
import {IUser} from "../../interface/iuser";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private user: UserService, private route: ActivatedRoute, private auth: AuthService) {
  }

  selectedUser: IUser | undefined;

  ngOnInit() {
    this.route.params.subscribe(params =>
      this.user.getOneUser(params['id']).subscribe(data => {
          this.selectedUser = data;
          return this.selectedUser;
        }
      )
    )
  }
}
