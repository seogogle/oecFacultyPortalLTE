import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceDealEditorComponent } from './finance-deal-editor.component';

describe('FinanceDealEditorComponent', () => {
  let component: FinanceDealEditorComponent;
  let fixture: ComponentFixture<FinanceDealEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanceDealEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceDealEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
