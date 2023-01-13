import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipApplicationAdslistComponent } from './leadership-application-adslist.component';

describe('LeadershipApplicationAdslistComponent', () => {
  let component: LeadershipApplicationAdslistComponent;
  let fixture: ComponentFixture<LeadershipApplicationAdslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadershipApplicationAdslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipApplicationAdslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
