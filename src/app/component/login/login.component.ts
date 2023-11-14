import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../service/login.service";
import {AuthService} from "../../service/auth.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Itoken} from "../../interface/iuser";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private service: LoginService,
    private auth: AuthService,
    private router: Router
  ) {
  }
  ngOnInit() {

  }

  public form:FormGroup = new FormGroup({
    username: new FormControl("franak@franak.com"),
    password: new FormControl("franak")
  })

  handleSubmit(){
    // console.log(this.form.value);
    this.auth.login(this.form.value).subscribe(
      (data:Itoken)=>{
        console.log(data.token);
        this.auth.saveToken(data.token);
        // window.location.reload();
      },
      (err: Error) => console.log(err),

    )

  }

}
