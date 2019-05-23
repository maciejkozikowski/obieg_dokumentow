import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddelComponent } from './adddel.component';

describe('AdddelComponent', () => {
  let component: AdddelComponent;
  let fixture: ComponentFixture<AdddelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
