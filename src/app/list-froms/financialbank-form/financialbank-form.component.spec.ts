import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialbankFormComponent } from './financialbank-form.component';

describe('FinancialbankFormComponent', () => {
  let component: FinancialbankFormComponent;
  let fixture: ComponentFixture<FinancialbankFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialbankFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialbankFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
