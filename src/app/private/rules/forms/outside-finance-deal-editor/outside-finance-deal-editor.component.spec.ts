import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutsideFinanceDealEditorComponent } from './outside-finance-deal-editor.component';

describe('OutsideFinanceDealEditorComponent', () => {
  let component: OutsideFinanceDealEditorComponent;
  let fixture: ComponentFixture<OutsideFinanceDealEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsideFinanceDealEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsideFinanceDealEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
