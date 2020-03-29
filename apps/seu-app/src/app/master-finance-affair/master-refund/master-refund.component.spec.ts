import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterRefundComponent } from './master-refund.component';

describe('MasterRefundComponent', () => {
  let component: MasterRefundComponent;
  let fixture: ComponentFixture<MasterRefundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterRefundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterRefundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
