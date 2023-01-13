import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StdsPrintDocsComponent } from './stds-print-docs.component';

describe('StdsPrintDocsComponent', () => {
  let component: StdsPrintDocsComponent;
  let fixture: ComponentFixture<StdsPrintDocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StdsPrintDocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StdsPrintDocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
