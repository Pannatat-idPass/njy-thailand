import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitorStatusComponent } from './monitor-status.component';

describe('MonitorStatusComponent', () => {
  let component: MonitorStatusComponent;
  let fixture: ComponentFixture<MonitorStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitorStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitorStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
