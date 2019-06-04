import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  serverPath = "http://localhost:8000"; //adres serwera

  //rejestracja
  onRegistration(registrationForm) {

    if (registrationForm.valid && registrationForm.value.password == registrationForm.value.passwordConfirmation) //jeśli wszystkie pola są poprawne
    {
      console.log(registrationForm.value); //registrationForm.value - objekt w JSON
      let url = "/user/registration"; //ścierzka do rejstracji 
      this.http.post(this.serverPath + url, registrationForm.value).subscribe(
        isValid => { //gdy się zarejstrujemu
          location.assign("");
        },
        err => { alert("Error: server not responding") } //gdy jest błąd
      );
    }
    else alert("Error");
  }

}
