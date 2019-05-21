import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //logowanie
  onLogin(loginForm) {
    if(loginForm.valid) //jeśli wszystkie pola są poprawne
    {
      alert("Logowanie");
      console.log(loginForm.value); //loginForm.value - objekt w JSON
    }
    else alert("Error");
  }

}
