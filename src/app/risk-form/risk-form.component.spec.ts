import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskFormComponent } from './risk-form.component';

describe('RiskFormComponent', () => {
  let component: RiskFormComponent;
  let fixture: ComponentFixture<RiskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RiskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
