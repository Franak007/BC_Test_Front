import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../service/login.service";
import {AuthService} from "../../service/auth.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Itoken} from "../../interface/iuser";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private service: LoginService,
    private auth: AuthService
  ) {
  }
  ngOnInit() {

  }

  public form:FormGroup = new FormGroup({
    username: new FormControl("franak@franak.com"),
    password: new FormControl("franak")
  })

  handleSubmit(){
    console.log(this.form.value);
    this.service.login(this.form.value).subscribe(
      (data:Itoken)=>{
        console.log(data.token);
        this.auth.saveToken(data.token)
      },
      err => console.log(err),

    )

  }


}
