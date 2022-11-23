import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { CustomerFormComponent } from './container/customer-form/customer-form.component';
import { CustomerService } from './service/customer.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CustomerFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
