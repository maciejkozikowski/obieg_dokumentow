import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Doc } from "../doc"

@Component({
  selector: 'app-listdocument',
  templateUrl: './listdocument.component.html',
  styleUrls: ['./listdocument.component.css']
})
export class ListdocumentComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    //this.getUserDocs();
    this.getLocal();
    this.getDocs();
  }

  query;
  userId;
  userEmail = "";

  getLocal() {
    this.userEmail = localStorage.getItem('email');
    console.log("Eamil: " + localStorage.getItem('email'));
  }

  docs: Doc[];

  serverPath = "http://localhost:8000";

  getUserDocs() {
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
  }

  getDocs() {
    let url = "/user/files";
    this.http.post(url, { "email": this.userEmail })
      .subscribe(
        data => {
          console.log(JSON.stringify(data));

        },
        error => { console.log(error) }
      )
  }

}
