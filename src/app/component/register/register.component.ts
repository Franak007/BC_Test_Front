import { Component } from '@angular/core';
import {UserService} from "../../service/user.service";
import {NgForm} from "@angular/forms";
import {IUser} from "../../interface/iuser";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  users:IUser[] = [];

  constructor(private user: UserService) { }
  onSubmit(form: NgForm) {
    this.user.addUser(form.value);
    this.user.addUser(form.value).subscribe(data =>{
      this.users.push(data);

    });
  }
}
