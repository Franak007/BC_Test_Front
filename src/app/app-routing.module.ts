import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {EthPageComponent} from "./component/eth-page/eth-page.component";
import {AboutComponent} from "./component/about/about.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'eth', component: EthPageComponent},
  {path: 'apropos', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
