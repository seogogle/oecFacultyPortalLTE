import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancePersonDashboardComponent } from './finance-person-dashboard.component';

describe('FinancePersonDashboardComponent', () => {
  let component: FinancePersonDashboardComponent;
  let fixture: ComponentFixture<FinancePersonDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancePersonDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancePersonDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
