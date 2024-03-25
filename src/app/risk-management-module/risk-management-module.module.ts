import { RiskListComponentComponent } from './../risk-list-component/risk-list-component.component';
import { RiskDetailsComponentComponent } from './../risk-details-component/risk-details-component.component';
import { RiskManagementComponent } from './../risk-management/risk-management.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    RiskManagementComponent,
    RiskListComponentComponent,
    RiskDetailsComponentComponent,
  ],
  imports: [CommonModule, HttpClientModule],
})
export class RiskManagementModule {}
