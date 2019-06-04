import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  serverPath = "http://localhost:8000"; //adres serwera

  userA: userAuth;

  //logowanie
  onLogin(loginForm) {
    if (loginForm.valid) //jeśli wszystkie pola są poprawne
    {
      console.log(loginForm.value); //loginForm.value - objekt w JSON
      let url = "/user/login"; //ścierzka do logowania 
      this.http.post(this.serverPath + url, loginForm.value).subscribe(
        data => {
          console.log("POST Request is successful ", data);
          console.log(JSON.stringify(data));
          //this.userA = data;
          //let res = data[0];
          this.userA.isAuthenticated = data['isAuthenticated'];
          this.userA.userClass = data['userClass'];
          if (this.userA.isAuthenticated === true) {
            if (this.userA.userClass == "Admin") {
              location.assign("/panadmin");
            }
            else if (this.userA.userClass == "Super Admin") {
              location.assign("/superadmin");
            }
            else if (this.userA.userClass == "Standard user") {
              location.assign("/user");
            }
          }
          else if (this.userA.isAuthenticated === false) alert("Not authenticated");
        },
        /*isValid => { //gdy się zalogujemy
          location.assign("/user");
    },*/
        err => { alert("Error: server not responding") } //gdy jest błąd
      );
    }
    else alert("Error");
  }

}

export class userAuth {
  isAuthenticated;
  userClass: String;
}