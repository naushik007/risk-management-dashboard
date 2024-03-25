import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RisksComponent } from './risks/risks.component';
import { DependenciesComponent } from './dependencies/dependencies.component';
import { SettingsComponent } from './settings/settings.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'risks', component: RisksComponent },
  { path: 'dependencies', component: DependenciesComponent },
  { path: 'settings', component: SettingsComponent },
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
