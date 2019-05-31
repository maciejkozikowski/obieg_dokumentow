import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Router, RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ListdocumentComponent } from './listdocument/listdocument.component';
import { AdddelComponent } from './adddel/adddel.component';
import { AddfileComponent } from './addfile/addfile.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';

import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

//ścierzki w adresie URL 
const appRoutes: Routes = [
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: '',
    component: IndexComponent
  },
  {
    path: 'user',
    component: UserPageComponent
  },
  {
    path: 'admin',
    component: AdminPageComponent
  },
  {
    path: 'dodaj',
    component: AddfileComponent
  },
  {
    path: 'zatwierdz',
    component: AdminPageComponent
  },
  {
    path: 'przegladaj',
    component: ListdocumentComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ListdocumentComponent,
    AdddelComponent,
    AddfileComponent,
    FooterComponent,
    NavbarComponent,
    IndexComponent,
    UserPageComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true}),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
