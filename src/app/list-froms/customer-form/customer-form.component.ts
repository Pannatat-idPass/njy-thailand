import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';
import { Location } from '@angular/common'
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss']
})
export class CustomerFormComponent implements OnInit {
  productDataFilter: any
  productData: any
  listBP = []
  mouths = ['01','02','03','04','05','06','07','08','09','10','11','12']
  Years = ['2564','2565']
  itemMouth:any
  itemYear:any
  list: any
  constructor(
    private customer: CustomerService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    console.log('mouths',this.mouths);
    
    this.route.queryParams
      .subscribe(params => {
        console.log('getqueryParams', params); // { orderby: "price" }
        this.list = params['list']
        console.log('this.list', this.list);

      })

    this.getCustomer('')
  }

  selectMouth(velue:any){
    console.log('velue',velue);
    this.itemMouth = velue

    this.updateDate()

  }

  selectYear(velue:any){
    this.itemYear = velue
    console.log('velue',velue);
    this.updateDate()
  }

  getCustomer(velue:any) {
    this.customer.getSheet().then((res) => {
      this.productDataFilter = res.user[this.list]
      // console.log(this.productDataFilter['ชื่อคนไข้']);
      this.customer.getBP(this.productDataFilter['ชื่อคนไข้'], velue).then((res) => {
        if (res['ความดัน'] !== ' / /') {
          this.listBP = res.user || '--/--/--'
        }
        // console.log('getBP', this.listBP);
      })
    })
  }

  updateDate() {
    // var time:any = this.mouth.value
    // var YYYY = time.slice(0, 4);
    // var MM = time.slice(5, 7);
    // // var DD = time.slice(8, 10);
    var todayDate = this.itemMouth + '/' + (this.itemYear||"2565")
    // this.mouth.setValue('mouth');
    if(this.itemMouth !== '---'){
      this.getCustomer(todayDate)
    } else {
      this.getCustomer('')
    }

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
