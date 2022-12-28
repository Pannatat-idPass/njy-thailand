import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdlFormComponent } from './adl-form.component';

describe('AdlFormComponent', () => {
  let component: AdlFormComponent;
  let fixture: ComponentFixture<AdlFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdlFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdlFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
