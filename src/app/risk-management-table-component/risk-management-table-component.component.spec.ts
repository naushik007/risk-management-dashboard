import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskManagementTableComponent } from './risk-management-table-component.component';

describe('RiskManagementTableComponent', () => {
  let component: RiskManagementTableComponent;
  let fixture: ComponentFixture<RiskManagementTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RiskManagementTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RiskManagementTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
