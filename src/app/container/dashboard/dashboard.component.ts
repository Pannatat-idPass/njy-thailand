import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  listCustomer:any
  constructor(
    private customer:CustomerService
  ) { }

  ngOnInit(): void {
    this.getCustomer()
  }

  getCustomer(){
    this.customer.getSheet().then((res)=>{
      this.listCustomer = res.user
      console.log(res.user);
      
    })
  }
}
