import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  listCustomer = []
  listBP = []
  constructor(
    private customer: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCustomer()
  }

  getCustomer() {
    // this.getBP()
    // this.getProfile()
    this.customer.getSheet().then((res) => {
      this.listCustomer = res.user
      console.log('getSheet', this.listCustomer);
      this.customer.getBP('','All').then((res) => {
        this.listBP = res.user
        console.log('getBP', this.listBP);
        let Customer = this.listCustomer
        if (Customer) {
          Customer.forEach((data, index) => {
            this.listBP.forEach((res) => {
              console.log('res new',res);
              if (data['ชื่อคนไข้'] == res['ชื่อคนไข้']) {
                if (res['ความดัน'] !== ' / /') {
                  this.listCustomer[index]['BP'] = res['ความดัน'] || '--/--/--'
                }
              }
            })
          })
          console.log(' this.listCustomer', this.listCustomer);
        }
      })
    })
  }

  // getBP() {
  //   this.customer.getBP().then((res) => {
  //     this.listBP = res.user
  //     console.log('getBP', this.listBP);
  //   })
  // }

  // getProfile() {
  //   this.customer.getSheet().then((res) => {
  //     this.listCustomer = res.user
  //     console.log('getSheet', this.listCustomer);
  //   })
  // }

  goProducts(velue: any) {
    this.router.navigate(
      ['/CustomerForm'],
      { queryParams: { list: velue } }
    );
  }
  gohistory(velue: any) {
    this.router.navigate(
      ['/HistoryFrom'],
      { queryParams: { list: velue } }
    );
  }

  goADL(velue: any) {
    this.router.navigate(
      ['/ADL'],
      { queryParams: { list: velue } }
    );
  }
}
