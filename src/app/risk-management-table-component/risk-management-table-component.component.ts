import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-risk-management-table-component',
  standalone: false,
  // imports: [],
  templateUrl: './risk-management-table-component.component.html',
  styleUrl: './risk-management-table-component.component.scss',
})
export class RiskManagementTableComponent implements OnInit {
  @Input() risks: Risk[] = [];

  constructor() {}

  ngOnInit(): void {}
}

export interface Risk {
  id: number;
  name: string;
  status: string;
}
