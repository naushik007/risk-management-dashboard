import { RiskService } from '../risk.service';
// import { Risk } from './../risk-management-table-component/risk-management-table-component.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  risks: Risk[] = [];
  dependencies: any[] = [
    { id: 1, name: 'Dependency 1', status: 'Met' },
    { id: 2, name: 'Dependency 2', status: 'Not Met' },
    { id: 3, name: 'Dependency 3', status: 'In Progress' },
  ];

  constructor(private riskManagementService: RiskService) {}

  ngOnInit(): void {
    this.riskManagementService.getImpactLabel('');
    // .subscribe((risks: any) => (this.risks = risks));
  }
}
export interface Risk {
  id: number;
  name: string;
  status: string;
}
