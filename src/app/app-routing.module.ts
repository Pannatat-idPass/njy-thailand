import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './container/customer-form/customer-form.component';
import { DashboardComponent } from './container/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'Dashboard', component: DashboardComponent },
  { path: 'CustomerForm', component: CustomerFormComponent },
  { path: '',   redirectTo: '/Dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
