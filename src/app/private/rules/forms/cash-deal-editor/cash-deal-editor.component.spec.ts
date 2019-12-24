import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashDealEditorComponent } from './cash-deal-editor.component';

describe('CashDealEditorComponent', () => {
  let component: CashDealEditorComponent;
  let fixture: ComponentFixture<CashDealEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashDealEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashDealEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
