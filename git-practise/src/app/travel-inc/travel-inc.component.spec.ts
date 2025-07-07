import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelIncComponent } from './travel-inc.component';

describe('TravelIncComponent', () => {
  let component: TravelIncComponent;
  let fixture: ComponentFixture<TravelIncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelIncComponent]
    });
    fixture = TestBed.createComponent(TravelIncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
