import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskDetailsComponentComponent } from './risk-details-component.component';

describe('RiskDetailsComponentComponent', () => {
  let component: RiskDetailsComponentComponent;
  let fixture: ComponentFixture<RiskDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskDetailsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RiskDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
