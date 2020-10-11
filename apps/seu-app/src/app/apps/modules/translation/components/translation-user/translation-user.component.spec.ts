import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationUserComponent } from './translation-user.component';

describe('TranslationUserComponent', () => {
  let component: TranslationUserComponent;
  let fixture: ComponentFixture<TranslationUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslationUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslationUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
