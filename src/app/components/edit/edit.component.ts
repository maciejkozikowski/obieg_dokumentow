import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdUnit } from '../index/AdUnit';
import { AdunitService } from '../../adunit.service';

@Component({
  selector: 'app-edit',
  template : `<div class="card">
  <div class="card-body">
    <form [formGroup]="angForm" novalidate>
      <div class="form-group">
        <label class="col-md-4">Unit Name</label>
        <input type="text" class="form-control" name="unit_name" formControlName="unit_name" #unit_name [(ngModel)] = "adunit.unit_name"/>
      </div>
      <div  class="alert alert-danger">
        <div *ngIf="angForm.controls['unit_name'].errors.required">
          Unit Name is required.
        </div>
      </div>
      <div class="form-group">
        <label class="col-md-4">Unit Price</label>
        <input type="text" class="form-control"/>
      </div>
      <div class="alert alert-danger">
        <div *ngIf="angForm.controls['unit_price'].errors.required">
          Unit Price is required.
        </div>
      </div>
      <div class="form-group">
        <button (click)="updateAdUnit(unit_name.value, unit_price.value)" [disabled]="angForm.invalid" class="btn btn-primary">Update Unit</button>
      </div>
    </form>
  </div>
</div>`,
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  adunit: any = {};
  angForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private adunitservice: AdunitService,
    private fb: FormBuilder) {
      this.createForm();
    }
    createForm() {
      this.angForm = this.fb.group({
             unit_name: ['', Validators.required ],
              unit_price: ['', Validators.required ]
         });
      }

    updateAdUnit(unit_name, unit_price) {
      this.route.params.subscribe(params => {
          this.adunitservice.updateAdUnit(unit_name, unit_price, params['id']);
          this.router.navigate(['index']);
      });
    }

    ngOnInit() {
      this.route.params.subscribe(params => {
        this.adunitservice.editAdUnit(params['id']).subscribe(res => {
          this.adunit = res;
      });
    });
  }
}
