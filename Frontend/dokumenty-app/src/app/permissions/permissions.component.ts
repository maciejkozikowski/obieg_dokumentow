import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.css']
})
export class PermissionsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAllUsers();
  }

  serverPath = "http://localhost:8080";

  users: User[] = [{ id: 1, email: "qwe", role: "USER" },
  { id: 2, email: "asd", role: "USER" },
  { id: 3, email: "zxc", role: "ADMIN" }];

  dodajUprawnienie(user: User) {
    console.log(JSON.stringify(user)); //w JSON
    user.role = "ADMIN";
    let url = "/user/asd";
    this.http.post(this.serverPath + url, user).subscribe(
      isValid => {
        //window.location.reload();
        console.log(JSON.stringify(user));
      },
      err => { alert("Error: server not responding"); }
    );
  }

  getAllUsers() {
    let url = "user/all";
    this.http.get<User[]>(this.serverPath + url).subscribe(
      res => {
        this.users = res;
      },
      err => {
        alert("Error: server not responding!")
      }
    );
  }
}
