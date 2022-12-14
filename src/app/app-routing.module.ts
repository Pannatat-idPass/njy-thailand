import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './list-froms/customer-form/customer-form.component';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { HistoryFromComponent } from './list-froms/history-from/history-from.component';
import { MonitorStatusComponent } from './container/monitor-status/monitor-status.component';
import { FinancialStatusComponent } from './container/financial-status/financial-status.component';

const routes: Routes = [
  { path: '',   redirectTo: '/Monitor', pathMatch: 'full' },
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'CustomerForm', component: CustomerFormComponent },
  { path: 'HistoryFrom', component: HistoryFromComponent },
  { path: 'Monitor', component: MonitorStatusComponent },
  { path: 'Financial', component: FinancialStatusComponent }
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
