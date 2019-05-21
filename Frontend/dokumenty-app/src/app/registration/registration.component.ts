import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //rejestracja
  onRegistration(registrationForm) {

    if (registrationForm.valid && registrationForm.value.password == registrationForm.value.passwordConfirmation) //jeśli wszystkie pola są poprawne
    {
      alert("Rejestrowanie");
      console.log(registrationForm.value);
    }
    else alert("Error");
  }

}
