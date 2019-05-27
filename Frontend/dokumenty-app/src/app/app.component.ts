import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `<div class="container">
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
  <app-login></app-login>
  <app-registration></app-registration>
  <app-addfile></app-addfile>
  <app-adddel></app-adddel>
  <app-footer></app-footer>
</div>`
})
export class AppComponent {
  title = 'dokumenty-app';
}


