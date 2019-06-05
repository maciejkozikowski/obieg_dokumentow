import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-addfile',
  templateUrl: './addfile.component.html',
  styleUrls: ['./addfile.component.css']
})
export class AddfileComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  userEmail = "";

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
    this.http.post("http://eod.pythonanywhere.com/user/email", { "filename": this.selectedFile.name, "email": this.userEmail })
      .subscribe(
        data => {
          console.log(data);
        },
        error => { console.log(error); });
  }



}
