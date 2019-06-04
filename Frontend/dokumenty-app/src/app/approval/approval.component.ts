import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Doc } from "../doc"
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getDocs();
  }

  query;
  docs: Doc[]; //= [{"name":"ASD","opis":"ASD","email":"qwe","id":1,"stan":"spoko","date":"123"}]

  serverPath = "http://localhost:8000";

  zatwierdz(doc: Doc) {
    console.log(JSON.stringify(doc)); //w JSON
    doc.stan = "zatwierdzony";
    let url = "/user/file/approval";
    this.http.post(this.serverPath + url, { "name": doc.name, "stan": doc.stan }).subscribe(
      isValid => {
        window.location.reload();
        console.log(JSON.stringify(doc));
      },
      err => { alert("Error: server not responding"); }
    );
  }

  odrzuc(doc: Doc) {
    console.log(JSON.stringify(doc)); //w JSON
    doc.stan = "odrzucony";
    let url = "/user/file/approval";
    this.http.post(this.serverPath + url, { "name": doc.name, "stan": doc.stan }).subscribe(
      isValid => {
        window.location.reload();
        console.log(JSON.stringify(doc));
      },
      err => { alert("Error: server not responding"); }
    );
  }

  getDocs() {
    let url = "/user/files/all";
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
