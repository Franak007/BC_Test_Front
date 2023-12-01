import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {EthPageComponent} from "./component/eth-page/eth-page.component";
import {AboutComponent} from "./component/about/about.component";
import {LoginComponent} from "./component/login/login.component";
import {RegisterComponent} from "./component/register/register.component";
import {Error404Component} from "./component/error404/error404.component";
import {AccountComponent} from "./component/account/account.component";
import {NftComponent} from "./component/nft/nft.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'eth', component: EthPageComponent},
  {path: 'apropos', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'users/:id', component: AccountComponent},
  {path: 'nft', component: NftComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
