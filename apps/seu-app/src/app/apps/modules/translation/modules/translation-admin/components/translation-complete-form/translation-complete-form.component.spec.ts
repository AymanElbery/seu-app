import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationCompleteFormComponent } from './translation-complete-form.component';

describe('TranslationCompleteFormComponent', () => {
  let component: TranslationCompleteFormComponent;
  let fixture: ComponentFixture<TranslationCompleteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslationCompleteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslationCompleteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
