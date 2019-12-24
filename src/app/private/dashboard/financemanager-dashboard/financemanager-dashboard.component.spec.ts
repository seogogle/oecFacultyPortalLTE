import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancemanagerDashboardComponent } from './financemanager-dashboard.component';

describe('FinancemanagerDashboardComponent', () => {
  let component: FinancemanagerDashboardComponent;
  let fixture: ComponentFixture<FinancemanagerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancemanagerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancemanagerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
