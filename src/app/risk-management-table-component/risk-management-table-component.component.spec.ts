import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskManagementTableComponentComponent } from './risk-management-table-component.component';

describe('RiskManagementTableComponentComponent', () => {
  let component: RiskManagementTableComponentComponent;
  let fixture: ComponentFixture<RiskManagementTableComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskManagementTableComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RiskManagementTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
