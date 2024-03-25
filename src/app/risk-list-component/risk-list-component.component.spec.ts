import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskListComponentComponent } from './risk-list-component.component';

describe('RiskListComponentComponent', () => {
  let component: RiskListComponentComponent;
  let fixture: ComponentFixture<RiskListComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskListComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RiskListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
