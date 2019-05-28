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

  serverPath = "http://localhost:8080"; //adres serwera

  //logowanie
  onLogin(loginForm) {
    if (loginForm.valid) //jeśli wszystkie pola są poprawne
    {
      console.log(loginForm.value); //loginForm.value - objekt w JSON
      let url = "/user/login"; //ścierzka do logowania 
      this.http.post(this.serverPath + url, loginForm.value).subscribe(
        isValid => { //gdy się zalogujemy
          location.assign("/index");
        },
        err => { alert("Error: server not responding") } //gdy jest błąd
      );
    }
    else alert("Error");
  }

}
