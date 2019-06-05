import { Component, OnInit, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from "rxjs";
import { FileUploadModule } from 'ng2-file-upload';
import { FileUploader } from 'ng2-file-upload';
import { map } from 'rxjs/operators';
import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { asTextData } from '@angular/core/src/view';
import { Router } from '@angular/router';

//@Injectable()
@Component({
  selector: 'app-adddel',
  templateUrl: './adddel.component.html',
  styleUrls: ['./adddel.component.css']
})
export class AdddelComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.getLocal();
  }

  opis = "";
  userEmail = "";

  getLocal() {
    this.userEmail = localStorage.getItem('email');
    if (localStorage.getItem('email') == null || localStorage.getItem('email') == "") {
      this.router.navigate(['/index']);
    }
    console.log("Eamil: " + localStorage.getItem('email'));
  }

  selectedFile: File = null;

  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }

  onUpload(): void {
    const fd = new FormData();
    fd.append('filename', this.selectedFile, this.selectedFile.name);
    console.log("Nazwa pliku: " + this.selectedFile.name);
    this.http.post("http://eod.pythonanywhere.com/user/file", fd)
      .toPromise().then(
        data => {
          let res = data;
          console.log(data);
          console.log(res["isSaved"]);
          if (res["isSaved"] === true) {
            console.log("Zapisano");
            this.addDocument();
          }
          else console.log(res["error"]);
        },
        error => { console.log(error); });
  }

  addDocument() {
    this.http.post("http://eod.pythonanywhere.com/user/doc", { "filename": this.selectedFile.name, "user": this.userEmail, "opis": this.opis })
      .subscribe(
        data => {
          console.log(data);
          console.log({ "filename": this.selectedFile.name, "user": this.userEmail, "opis": this.opis });
        },
        error => { console.log(error); });
  }



}
