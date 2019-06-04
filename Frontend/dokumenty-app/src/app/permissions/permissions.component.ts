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

  serverPath = "http://localhost:8000";

  users:object[];
  users2 = this.users['Standard Users'];

  dodajUprawnienie(user: User) {
    console.log(JSON.stringify(user)); //w JSON
    let role = "ADMIN";
    let url = "/user/permissions";
    this.http.post(this.serverPath + url, { "id": user.id, "email": user.email, "role": "Admin" } ).subscribe(  //{ "id": user.id, "email": user.email, "role": "Admin" }
      isValid => {
        //window.location.reload();
        console.log(JSON.stringify(user));
      },
      err => { alert("Error: server not responding"); }
    );
  }

  getAllUsers() {
    let url = "/user/all";
    this.http.get<object[]>(this.serverPath + url).subscribe(
      res => {
        this.users = res;
        console.log(JSON.stringify(res));
      },
      err => {
        alert("Error: server not responding!")
      }
    );
  }
}
