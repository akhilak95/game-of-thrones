import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HusesComponent } from './huses.component';

describe('HusesComponent', () => {
  let component: HusesComponent;
  let fixture: ComponentFixture<HusesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HusesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HusesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
