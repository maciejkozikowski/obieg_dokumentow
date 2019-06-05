import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getLocal();
    this.getAllUsers();
    console.log(this.users);
    console.log(JSON.stringify(this.users));
  }

  userEmail = "";

  getLocal() {
    this.userEmail = localStorage.getItem('email');
    if (localStorage.getItem('email') == null || localStorage.getItem('email') == "") {
      this.router.navigate(['/index']);
    }
    console.log("Eamil: " + localStorage.getItem('email'));
  }
  
  serverPath = "http://eod.pythonanywhere.com";

  users: User[];
  //users2 = this.users['Standard Users'];

  dodajUprawnienie(user: User) {
    console.log(JSON.stringify(user)); //w JSON
    let role = "ADMIN";
    let url = "/user/permissions";
    this.http.post(this.serverPath + url, { "id": user.id, "email": user.email, "role": "Admin" }).subscribe(  //{ "id": user.id, "email": user.email, "role": "Admin" }
      isValid => {
        //window.location.reload();
        console.log(JSON.stringify(user));
      },
      err => { alert("Error: server not responding"); }
    );
  }

  getAllUsers() {
    let url = "/user/all";
    this.http.get<User[]>(this.serverPath + url).subscribe(
      res => {
        this.users = res["Standard Users"];
        console.log(res["Standard Users"]);
      },
      err => {
        alert("Error: server not responding!")
      }
    );
  }
}
