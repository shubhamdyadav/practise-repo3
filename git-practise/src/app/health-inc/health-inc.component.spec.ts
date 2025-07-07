import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthIncComponent } from './health-inc.component';

describe('HealthIncComponent', () => {
  let component: HealthIncComponent;
  let fixture: ComponentFixture<HealthIncComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthIncComponent]
    });
    fixture = TestBed.createComponent(HealthIncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
