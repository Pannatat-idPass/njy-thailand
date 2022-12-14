import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-financial-form',
  templateUrl: './financial-form.component.html',
  styleUrls: ['./financial-form.component.scss']
})
export class FinancialFormComponent implements OnInit {
  listfinancial = []
  listPrice:number = 0;
  listPay:number = 0;
  mouths = ['01','02','03','04','05','06','07','08','09','10','11','12']
  Years = ['2564','2565']
  itemMouth:any
  itemYear:any

  constructor(
    private location: Location,
    private customer : CustomerService
  ) { }

  ngOnInit(): void {
    this.getFinancial('')
  }

  getFinancial(velue:any) {
    console.log('velue2',velue);
    this.customer.getFinancial(velue).then((res) => {
      console.log('res1',res.report);
      this.listfinancial = res.report
      this.listfinancial.forEach((financial)=>{
        // console.log('financial',financial);
        
        if(financial['ประเภท'] == 'รับ'){
          this.listPrice = this.listPrice + parseInt(financial['price'])
        } else if(financial['ประเภท'] == 'จ่าย') {
          this.listPay = this.listPrice + parseInt(financial['price'])
        }
      })
      console.log('listPay',this.listPay);
      console.log('listPrice',this.listPrice);
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
      console.log('todayDate',todayDate);
      
      this.getFinancial(todayDate)
    } else {
      this.getFinancial('')
    }

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
