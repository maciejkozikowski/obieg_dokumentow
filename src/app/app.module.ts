import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { IndexComponent } from './components/index/index.component';
import { EditComponent } from './components/edit/edit.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdunitService } from './adunit.service';
import { AddfileComponent } from './components/addfile/addfile.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { AdddellComponent } from './components/adddell/adddell.component';
import { ListdocumentComponent } from './components/listdocument/listdocument.component';
import { SerchdocumentComponent } from './components/serchdocument/serchdocument.component';

const routes: Routes = [
  {
    path: 'addfile',
    component: AddfileComponent
  },
  {
    path: 'create',
    component: IndexComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'navbar',
    component: NavbarComponent
  },
  {
    path: 'pagination',
    component: PaginationComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'adddell',
    component: AdddellComponent
  },
  {
    path: 'listdocument',
    component: ListdocumentComponent
  },
  {
    path: 'serchdocument',
    component: SerchdocumentComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    IndexComponent,
    EditComponent,
    AddfileComponent,
    FooterComponent,
    LoginComponent,
    NavbarComponent,
    PaginationComponent,
    RegistrationComponent,
    AdddellComponent,
    ListdocumentComponent,
    SerchdocumentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SlimLoadingBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [AdunitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
