import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesViewComponent } from './houses-view.component';

describe('HousesViewComponent', () => {
  let component: HousesViewComponent;
  let fixture: ComponentFixture<HousesViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HousesViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
