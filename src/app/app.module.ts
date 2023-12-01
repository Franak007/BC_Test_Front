import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { AboutComponent } from './component/about/about.component';
import { EthPageComponent } from './component/eth-page/eth-page.component';
import {HttpClientModule} from "@angular/common/http";
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { UserComponent } from './component/user/user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TokenInterceptor} from "./token.interceptor";
import { AccountComponent } from './component/account/account.component';
import { Error404Component } from './component/error404/error404.component';
import {CommonModule} from "@angular/common";
import {MatSelectModule} from "@angular/material/select";
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import { NftComponent } from './component/nft/nft.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    EthPageComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    AccountComponent,
    Error404Component,
    NftComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [TokenInterceptor],
  bootstrap: [AppComponent]
})
export class AppModule { }
