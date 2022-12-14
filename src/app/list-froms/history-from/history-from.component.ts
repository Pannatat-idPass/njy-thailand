import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-history-from',
  templateUrl: './history-from.component.html',
  styleUrls: ['./history-from.component.scss']
})
export class HistoryFromComponent implements OnInit {
  listCustomer: any
  listBP = []
  list: any
  constructor(
    private customer: CustomerService,
    private route: ActivatedRoute,
    private location: Location

  ) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.list = params['list']
      })
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
    // var printContents = document.getElementById(idName)?.innerHTML;
    // console.log(printContents);

    //   var popupWin:any = window.open('', '_blank', 'width=auto,height=auto');
    // popupWin.document.open();
    // popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.scss" /></head><body onload="window.print()">' + printContents + '</body></html>');
    // popupWin.document.close();
  }

  back(): void {
    this.location.back()
  }
}
