import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdunitService } from '../../adunit.service';

@Component({
  selector: 'app-create',
  template : `<div class="card">
  <div class="card-body">
    <form [formGroup]="angForm" novalidate>

      <div class="form-group">
        <label class="col-md-4">Podaj nazwę</label>
        <input type="text" class="form-control"/>
      </div>
      <div *ngIf="" class="alert alert-danger">
        <div *ngIf="">
          Dodaj nazwę
        </div>
      </div>
      <div class="form-group">
        <button (click)="addfile()" class="btn btn-primary">Dodaj plik</button>
      </div>
    </form>
  </div>
</div>`,
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  angForm: FormGroup;

  constructor(private adunitservice: AdunitService, private fb: FormBuilder) { 
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      unit_name: ['', Validators.required ],
      unit_price: ['', Validators.required ]
   });
  }

  addAdUnit(unit_name, unit_price) {
    this.adunitservice.addAdUnit(unit_name, unit_price);
}
  ngOnInit() {
  }

}
