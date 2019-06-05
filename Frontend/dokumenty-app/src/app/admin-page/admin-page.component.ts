import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    this.getLocal();
  }

  userEmail = "";

  getLocal() {
    this.userEmail = localStorage.getItem('email');
    if (localStorage.getItem('email') == null || localStorage.getItem('email') == "") {
      this.router.navigate(['/index']);
    }
    console.log("Eamil: " + localStorage.getItem('email'));
  }

}
