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
    //this.getDocs();
  }

  query;

  docs: Doc[] = [{ name: "Dok1", path: "asd.pdf", user: "Jan", opis: "xDDD", status: "nie" },
  { name: "qwe", path: "gggg", user: "ASD", opis: "ASD", status: "nie" },
  { name: "asd", path: "dddd", user: "DSA", opis: "ASD", status: "tak" },
  { name: "umowa.pdf", path: "dok/umowa.pdf", user: "allah@boom.c4", opis: "nic", status: "oczekujący" }];

  serverPath = "http://localhost:8000";

  zatwierdz(doc: Doc) {
    console.log(JSON.stringify(doc)); //w JSON
    doc.status = "przyjęty";
    let url = "/user/file";
    this.http.post(this.serverPath + url, doc).subscribe(
      isValid => {
        //window.location.reload();
        console.log(JSON.stringify(doc));
      },
      err => { alert("Error: server not responding"); }
    );
  }
  
  odrzuc(doc: Doc) {
    console.log(JSON.stringify(doc)); //w JSON
    doc.status = "odrzucony";
    let url = "/user/file";
    this.http.post(this.serverPath + url, doc).subscribe(
      isValid => {
        //window.location.reload();
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
