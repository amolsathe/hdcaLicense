import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppliedLicenceComponent } from './applied-licence.component';

describe('AppliedLicenceComponent', () => {
  let component: AppliedLicenceComponent;
  let fixture: ComponentFixture<AppliedLicenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppliedLicenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppliedLicenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
