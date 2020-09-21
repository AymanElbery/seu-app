import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadershipApplicationRecommendComponent } from './leadership-application-recommend.component';

describe('LeadershipApplicationRecommendComponent', () => {
  let component: LeadershipApplicationRecommendComponent;
  let fixture: ComponentFixture<LeadershipApplicationRecommendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadershipApplicationRecommendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadershipApplicationRecommendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
