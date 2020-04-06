import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavEmpComponent } from './fav-emp.component';

describe('FavEmpComponent', () => {
  let component: FavEmpComponent;
  let fixture: ComponentFixture<FavEmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavEmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
