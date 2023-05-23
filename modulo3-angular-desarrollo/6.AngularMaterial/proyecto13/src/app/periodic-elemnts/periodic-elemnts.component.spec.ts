import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodicElemntsComponent } from './periodic-elemnts.component';

describe('PeriodicElemntsComponent', () => {
  let component: PeriodicElemntsComponent;
  let fixture: ComponentFixture<PeriodicElemntsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PeriodicElemntsComponent]
    });
    fixture = TestBed.createComponent(PeriodicElemntsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
