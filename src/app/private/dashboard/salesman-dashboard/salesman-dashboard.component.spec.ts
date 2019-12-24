import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesmanDashboardComponent } from './salesman-dashboard.component';

describe('SalesmanDashboardComponent', () => {
  let component: SalesmanDashboardComponent;
  let fixture: ComponentFixture<SalesmanDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesmanDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesmanDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
