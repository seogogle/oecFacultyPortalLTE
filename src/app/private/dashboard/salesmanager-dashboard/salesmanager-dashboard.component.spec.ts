import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesmanagerDashboardComponent } from './salesmanager-dashboard.component';

describe('SalesmanagerDashboardComponent', () => {
  let component: SalesmanagerDashboardComponent;
  let fixture: ComponentFixture<SalesmanagerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesmanagerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesmanagerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
