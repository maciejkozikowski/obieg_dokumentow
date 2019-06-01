import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from "rxjs";
import { FileUploadModule } from 'ng2-file-upload';
import { FileUploader } from 'ng2-file-upload';
import { map } from 'rxjs/operators';
import { HttpErrorResponse, HttpEventType } from '@angular/common/http';

//@Injectable()
@Component({
  selector: 'app-adddel',
  templateUrl: './adddel.component.html',
  styleUrls: ['./adddel.component.css']
})
export class AdddelComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  /*upload()
  {
    alert("Comming soon!");
  }

  fileChange(event) {
    let fileList: FileList = event.target.files;
    if(fileList.length > 0) {
        let file: File = fileList[0];
        let formData:FormData = new FormData();
        formData.append('uploadFile', file, file.name);
        this.http.post("http://localhost:8080/api/file", formData)
            .subscribe(
                data => console.log('success'),
                error => console.log(error)
            )
    }
}*/

  fileData: File = null;

  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.fileData);
    this.http.post("http://localhost:8080/api/file", formData)
      .subscribe(res => {
        console.log(res);
        alert('SUCCESS !!');
      })
  }

}
