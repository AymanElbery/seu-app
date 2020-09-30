import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslationMenuComponent } from './translation-menu.component';

describe('TranslationMenuComponent', () => {
  let component: TranslationMenuComponent;
  let fixture: ComponentFixture<TranslationMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TranslationMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TranslationMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
