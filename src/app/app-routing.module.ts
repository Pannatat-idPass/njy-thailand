import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './container/customer-form/customer-form.component';
import { DashboardComponent } from './container/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'CustomerForm', component: CustomerFormComponent },
  { path: '',   redirectTo: '/Dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
