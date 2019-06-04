import { Component, OnInit, ViewChild } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from "rxjs";
import { FileUploadModule } from 'ng2-file-upload';
import { FileUploader } from 'ng2-file-upload';
import { map } from 'rxjs/operators';
import { HttpErrorResponse, HttpEventType } from '@angular/common/http';
import { asTextData } from '@angular/core/src/view';

//@Injectable()
@Component({
  selector: 'app-adddel',
  templateUrl: './adddel.component.html',
  styleUrls: ['./adddel.component.css']
})
export class AdddelComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getLocal();
  }

  opis;
  userEmail;

  getLocal() {
    this.userEmail = localStorage.getItem('email');
  }

  /*upload()
  {
    alert("Comming soon!");
  }*/

  /*fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        this.http.post("http://localhost:8000/api/file", formData)
            .subscribe(
                data => console.log('success'),
                error => console.log(error)
            )
    }
}*/

  /*fileData: File = null;

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.fileData);
    this.http.post("http://localhost:8000/user/files", formData)
      .subscribe(res => {
        console.log(res);
        alert('SUCCESS !!');
      },
        err => { console.log(err); })
  }*/

  selectedFile: File = null;

  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
  }

  onUpload(): void {
    const fd = new FormData();
    fd.append('filename', this.selectedFile, this.selectedFile.name);
    this.http.post("http://localhost:8000/user/file", fd)
      .toPromise().then(
        data => {
          let res = data;
          console.log(data);
          console.log(res['isSaved']);
          if (res['isSaved'] === true) {
            console.log("Zapisano");
            this.addDocument();
          }
          else console.log(res['error']);
        },
        error => { console.log(error); });
  }

  addDocument() {
    this.http.post("http://localhost:8000/user/doc", { "filename": this.selectedFile.name, "user": this.userEmail, "opis": this.opis })
      .subscribe(
        data => {
          console.log(data);
          console.log({ "filename": this.selectedFile.name, "user": this.userEmail, "opis": this.opis });
        },
        error => { console.log(error); });
  }





  //.toPromise().then( data => console.log(data), error => console.log(error) );


  /*.subscribe(
          res => {
            console.log(res);
          }
        )*/






}
