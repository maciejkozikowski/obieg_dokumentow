import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
<<<<<<< HEAD
  templateUrl: './navbar.component.html',
=======
  template : `  <ng2-slim-loading-bar color="blue"></ng2-slim-loading-bar>
  <nav class="navbar navbar-dark bg-dark navbar-expand-lg navbar">
      <a class="navbar-brand" routerLink="/" routerLinkActive="active">
        <img src="favicon.ico" width="30" height="30" class="d-inline-block align-top" alt="Obieg dokumentow">Obieg
        dokumentów</a>
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0 text-right">
        <li class="nav-item">
          <button  routerLink="login" class="btn btn-primary" routerLinkActive="active">Logowanie</button>
        </li>
        <li class="nav-item">
          <button routerLink="registration" class="btn btn-primary" routerLinkActive="active">Rejestracja</button>
        </li>
      </ul>
    </nav>
  `,
>>>>>>> 2382618f1589595ce4dc2640a512ecf2b9110312
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
