import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryFromComponent } from './history-from.component';

describe('HistoryFromComponent', () => {
  let component: HistoryFromComponent;
  let fixture: ComponentFixture<HistoryFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
