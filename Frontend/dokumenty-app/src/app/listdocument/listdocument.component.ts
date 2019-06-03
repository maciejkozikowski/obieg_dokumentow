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
  }

  docs: Doc[] = [{ name: "Dok1", path: "asd.pdf", user: "Jan", opis: "xDDD", status: "nie" },
  { name: "asd", path: "aaa", user: "ASD", opis: "ASD", status: "nie" },
  { name: "asd", path: "aaa", user: "ASD", opis: "ASD", status: "tak" },
  { name: "asd", path: "aaa", user: "ASD", opis: "ASD", status: "nie" }];

  serverPath = "http://localhost:8000";

  getUserDocs() {
    let url = "/user/id/files";
    this.http.get<Doc[]>(this.serverPath + url).subscribe(
      res => {
        this.docs = res;
      },
      err => {
        alert("Error: server not responding!")
      }
    );
  }

}
