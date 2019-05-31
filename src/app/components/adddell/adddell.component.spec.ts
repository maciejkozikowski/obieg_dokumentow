import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddellComponent } from './adddell.component';

describe('AdddellComponent', () => {
  let component: AdddellComponent;
  let fixture: ComponentFixture<AdddellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
