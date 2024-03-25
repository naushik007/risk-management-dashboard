import { Injectable } from '@angular/core';
// import { IRisk } from './risk.model';

@Injectable({
  providedIn: 'root',
})
export class RiskService {
  dataSource: any[] = [
    {
      id: 1,
      name: 'Test Risk',
      description: 'This is a test description for risk 1.',
      impact: 'medium',
    },
    {
      id: 2,
      name: 'Another Test Risk',
      description: 'This is a test description for risk 2.',
      impact: 'low',
    },
  ];

  constructor() {}

  onSubmitRisk(risk: any) {
    if (!risk) {
      return;
    }

    this.dataSource = [...this.dataSource, risk];
  }

  onEditRisk(risk: any) {
    // Implement risk editing
  }

  getImpactColor(impact: string): string {
    switch (impact) {
      case 'low':
        return 'lightgreen';
      case 'medium':
        return 'yellow';
      case 'high':
        return 'red';
      default:
        return 'lightgray';
    }
  }

  getImpactLabel(impact: string): string {
    switch (impact) {
      case 'low':
        return 'RISK_MANAGEMENT_PLUGIN.IMPACT.LOW';
      case 'medium':
        return 'RISK_MANAGEMENT_PLUGIN.IMPACT.MEDIUM';
      case 'high':
        return 'RISK_MANAGEMENT_PLUGIN.IMPACT.HIGH';
      default:
        return 'Unknown';
    }
  }

  get angularVersion(): string {
    return '12.2.x';
  }
}
