import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-financialbank-form',
  templateUrl: './financialbank-form.component.html',
  styleUrls: ['./financialbank-form.component.scss']
})
export class FinancialbankFormComponent implements OnInit {
  listfinancial = []
  dataFinancial = []
  listLocations = []
  locationName: any
  listPrice: number = 0;
  listPay: number = 0;
  mouths = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12']
  Years = ['2564', '2565']
  itemMouth: any
  itemYear: any
  constructor(
    private location: Location,
    private customer: CustomerService

  ) { }

  ngOnInit(): void {
    this.getFinancial('')
  }

  getFinancial(velue: any) {
    this.customer.getFinancial(velue).then((res) => {
      this.listfinancial = res.report
      this.listfinancial.forEach((financial) => {
        if (this.listLocations.indexOf(financial['สาขา']) <= -1) {
          this.listLocations.push(financial['สาขา'])
        }
        if (!this.locationName || this.locationName == '---') {
          this.dataFinancial.push(financial)
          if (financial['ประเภท'] == 'รับ') {
            this.listPrice = this.listPrice + (parseInt(financial['price']) || 0)
          } else if (financial['ประเภท'] == 'จ่าย') {
            this.listPay = this.listPay + (parseInt(financial['price']) || 0)
          }
        } else {
          if (this.locationName == financial['สาขา']) {
            this.dataFinancial.push(financial)
            if (financial['ประเภท'] == 'รับ') {
              this.listPrice = this.listPrice + (parseInt(financial['price']) || 0)
            } else if (financial['ประเภท'] == 'จ่าย') {
              this.listPay = this.listPay + (parseInt(financial['price']) || 0)
            }
          }
        }
      })
      console.log('listPay', this.listPay);
      console.log('listPrice', this.listPrice);
      console.log('this.listLocations', this.listLocations)
    })
  }

  selectLocations(velue: any) {
    // console.log('velue', velue);
    this.locationName = velue || ''
    this.updateDate()
  }

  updateDate() {
    var todayDate = this.itemMouth + '/' + (this.itemYear || "2565")
    this.dataFinancial = []
    this.listPay = 0;
    this.listPrice = 0;
    if (this.itemMouth !== '---' && this.itemMouth !== undefined) {
      console.log('todayDate', todayDate, 'location', this.locationName);
      this.getFinancial(todayDate)
    } else {
      this.getFinancial('')
    }
  }

  selectMouth(velue: any) {
    console.log('velue', velue);
    this.itemMouth = velue
    this.updateDate()
  }

  selectYear(velue: any) {
    this.itemYear = velue
    console.log('velue', velue);
    this.updateDate()
  }
  printDiv(idName: any) {
    window.print()
  }

  back(): void {
    this.location.back()
  }
}
