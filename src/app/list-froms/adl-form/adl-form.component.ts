import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-adl-form',
  templateUrl: './adl-form.component.html',
  styleUrls: ['./adl-form.component.scss']
})
export class AdlFormComponent implements OnInit {
  listCustomer: any
  listBP = []
  list: any
  constructor(
    private customer: CustomerService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
  this.getCustomer()
  }

  getCustomer() {
    this.customer.getHistory(this.list).then((res) => {
      console.log('res1',res.user);
      this.listCustomer = res.user
      this.customer.getBP(this.list,'true').then((data) => {
        console.log('res2',data.user);
        if(data && data.user[0]['ความดัน']){
          this.listCustomer[0]['BP'] = data.user[0]['ความดัน'] || '--/--/--'
          console.log('getSheet', this.listCustomer);
        }
      })
    })
  }

  printDiv(idName: any) {
    window.print()
  }

  back(): void {
    this.location.back()
  }
}
