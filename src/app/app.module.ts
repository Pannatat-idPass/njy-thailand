import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { CustomerFormComponent } from './list-froms/customer-form/customer-form.component';
import { CustomerService } from './service/customer.service';
import { HistoryFromComponent } from './list-froms/history-from/history-from.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MonitorStatusComponent } from './container/monitor-status/monitor-status.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FinancialStatusComponent } from './container/financial-status/financial-status.component';
import { FinancialFormComponent } from './list-froms/financial-form/financial-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomerFormComponent,
    HistoryFromComponent,
    MonitorStatusComponent,
    FinancialStatusComponent,
    FinancialFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDatepickerModule,
    ReactiveFormsModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
