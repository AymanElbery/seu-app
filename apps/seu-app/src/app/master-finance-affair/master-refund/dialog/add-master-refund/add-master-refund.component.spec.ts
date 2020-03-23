import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMasterRefundComponent } from './add-master-refund.component';

describe('AddMasterRefundComponent', () => {
  let component: AddMasterRefundComponent;
  let fixture: ComponentFixture<AddMasterRefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMasterRefundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMasterRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
