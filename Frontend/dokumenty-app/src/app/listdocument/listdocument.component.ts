import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Doc } from "../doc"
import { Routes } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listdocument',
  templateUrl: './listdocument.component.html',
  styleUrls: ['./listdocument.component.css']
})
export class ListdocumentComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    //this.getUserDocs();
    this.getLocal();
    this.getDocs();
    console.log(this.docs);
  }

  query;
  userId;
  userEmail = "";

  getLocal() {
    this.userEmail = localStorage.getItem('email');
    if (localStorage.getItem('email') == null || localStorage.getItem('email') == "") {
      this.router.navigate(['/index']);
    }
    console.log("Eamil: " + localStorage.getItem('email'));
  }

  docs: Doc[] /*= [{ name: "Dok1", email: "asd.pdf", opis: "Jan", stan: "xDDD", date: "nie" },
  { name: "Dok1", email: "asd.pdf", opis: "Jan", stan: "xDDD", date: "nie" },
  { name: "Dok1", email: "asd.pdf", opis: "Jan", stan: "xDDD", date: "nie" },
  { name: "Dok1", email: "asd.pdf", opis: "Jan", stan: "xDDD", date: "nie" }]*/;

  serverPath = "http://eod.pythonanywhere.com";

  /*getUserDocs() {
    let url = "/user/files/" + this.userId;
    this.http.get<Doc[]>(this.serverPath + url).subscribe(
      res => {
        this.docs = res;
        console.log(res);
      },
      err => {
        alert("Error: server not responding!")
      }
    );
  }*/

  getDocs() {
    let url = "/user/files";
    this.http.post(this.serverPath + url, { "email": this.userEmail })
      .subscribe(
        data => {
          console.log(JSON.stringify(data));
          let res = data["user documents"];
          this.docs = res;
          console.log(res);
        },
        error => { console.log(error) }
      )
  }

}
