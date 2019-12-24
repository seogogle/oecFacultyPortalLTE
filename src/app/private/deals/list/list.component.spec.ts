import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealsListComponent } from './list.component';

describe('ListComponent', () => {
  let component: DealsListComponent;
  let fixture: ComponentFixture<DealsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
