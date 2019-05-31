import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchdocumentComponent } from './serchdocument.component';

describe('SerchdocumentComponent', () => {
  let component: SerchdocumentComponent;
  let fixture: ComponentFixture<SerchdocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerchdocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerchdocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
