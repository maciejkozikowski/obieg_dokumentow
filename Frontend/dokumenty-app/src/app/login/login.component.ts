import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient,
    private router: Router ) { }

  ngOnInit() {
    //console.log(this.asd['0']);
    //console.log(this.qwe['0']['userClass']);
    //console.log(this.asd2['userClass']);
    //console.log(this.qwe2);
  }

  serverPath = "http://localhost:8000"; //adres serwera

  //userA: userAuth;
  //asd =  { "lista":[{"isAuthenticated":false, "userClass":"Admin"}, {"isAuthenticated":true, "userClass":"User"}]};
  //asd2 = { "isAuthenticated": false, "userClass": "Admin" };
  //qwe = this.asd['lista'];
  //qwe2 = this.asd2['userClass'];

  setLocal(email) {
    localStorage.setItem('email', email);
  }

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
          let res = data;
          console.log(res['isAuthenticated']);
          console.log(res['userClass']);
          //this.userA.isAuthenticated = res['isAuthenticated'];
          //this.userA.userClass = res['userClass'];
          if (res['isAuthenticated'] === true) {
            this.setLocal(loginForm.value['email']);
            //alert("Email: " + loginForm.value['email']);
            if (res['userClass'] == "Admin") {
              //location.assign("/panadmin");
              this.router.navigate(['/panadmin']);
            }
            else if (res['userClass'] == "Super Admin") {
              //location.assign("/superadmin");
              this.router.navigate(['/superadmin']);
            }
            else if (res['userClass'] == "Standard user") {
              //location.assign("/panuser");
              this.router.navigate(['panuser']);
            }
          }
          else if (res['isAuthenticated'] === false) alert("Not authenticated");
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