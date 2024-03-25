// Import necessary components and modules from Angular core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

// Import your custom components
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RiskManagementTableComponent } from './risk-management-table-component/risk-management-table-component.component';
// Import other custom components if needed
// import { DependencyTrackingTableComponent } from './dependency-tracking-table/dependency-tracking-table.component';

// Define routes if you have them
import { routes } from './app.routes';

@NgModule({
  declarations: [
    // Declare your components here
    // AppComponent,
    DashboardComponent,
    RiskManagementTableComponent,
    // Uncomment below if you have DependencyTrackingTableComponent
    // DependencyTrackingTableComponent,
  ],
  imports: [
    BrowserModule,

    // Import RouterModule and use your defined routes
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
