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
import { SuperadminPageComponent } from './superadmin-page/superadmin-page.component';
import { ApprovalComponent } from './approval/approval.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { FileUploadModule } from 'ng2-file-upload';

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
    path: 'superadmin',
    component: SuperadminPageComponent
  },
  {
    path: 'dodaj',
    component: AdddelComponent
  },
  {
    path: 'zatwierdz',
    component: ApprovalComponent
  },
  {
    path: 'przegladaj',
    component: ListdocumentComponent
  },
  {
    path: 'uprawnienia',
    component: PermissionsComponent
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
    AdminPageComponent,
    SuperadminPageComponent,
    ApprovalComponent,
    PermissionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes, {enableTracing:true}),
    FormsModule,
    HttpClientModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
