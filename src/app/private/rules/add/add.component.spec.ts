import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { rulesAddComponent } from './add.component';

describe('AddComponent', () => {
  let component: rulesAddComponent;
  let fixture: ComponentFixture<rulesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ rulesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(rulesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
