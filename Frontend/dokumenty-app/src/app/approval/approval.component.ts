import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Doc } from "../doc"
import { FilterPipe } from '../filter.pipe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getLocal();
    this.getDocs();
  }

  userEmail = "";
  query;
  docs: Doc[]; //= [{"name":"ASD","opis":"ASD","email":"qwe","id":1,"stan":"spoko","date":"123"}]

  serverPath = "http://localhost:8000";

  getLocal() {
    this.userEmail = localStorage.getItem('email');
    if (localStorage.getItem('email') == null || localStorage.getItem('email') == "") {
      this.router.navigate(['/index']);
    }
    console.log("Eamil: " + localStorage.getItem('email'));
  }

  zatwierdz(doc: Doc) {
    console.log(JSON.stringify(doc)); //w JSON
    doc.stan = "Zatwierdzony";
    let url = "/user/file/approval";
    this.http.post(this.serverPath + url, { "name": doc.name, "stan": doc.stan }).subscribe(
      isValid => {
        //window.location.reload();
        console.log(JSON.stringify(doc));
      },
      err => { alert("Error: server not responding"); }
    );
  }

  odrzuc(doc: Doc) {
    console.log(JSON.stringify(doc)); //w JSON
    doc.stan = "Odrzucony";
    let url = "/user/file/approval";
    this.http.post(this.serverPath + url, { "name": doc.name, "stan": doc.stan }).subscribe(
      isValid => {
        //window.location.reload();
        console.log(JSON.stringify(doc));
      },
      err => { alert("Error: server not responding"); }
    );
  }

  getDocs() {
    let url = "/user/files/all";
    this.http.get(this.serverPath + url).subscribe(
      res => {
        console.log(res);
        this.docs = res["documents"];
        console.log(this.docs);
      },
      err => {
        alert("Error: server not responding!")
      }
    );
  }

  downloadFile(name) {
    let url = "/user/file/get";
    this.http.post(this.serverPath + url, { "name": name })
      .subscribe(
        data => {
          console.log(data);
          //const blob = new Blob([data]);
          //const adr = window.URL.createObjectURL(blob);
          //window.open(adr);
          let asd = window.URL.createObjectURL(data);
          window.open(asd);
        }
      );
  }

}
