import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(
    private http : HttpClient
  ) { console.log('CustomerService');
  }

  public getSheet(): Promise<any> {
      var url = `https://script.google.com/macros/s/AKfycby4JwLdqA70li3Vycy6ZzB_ysRR4QNiFxcr7Onxvd9YnczOoivG5OqTyavyFJEqaYhE/exec?q=1`
      return this.http.get(url).toPromise();
      }

  public getBP(velue:any,timeDate:any): Promise<any> {
      var url = `https://script.google.com/macros/s/AKfycbzP6fXCjq9vMqO5UcJ9HwNzYIRCzrOmayFVn9Qpyk2yEwBaIr30R9GbI79Vd9Em8sBISw/exec?n=${velue}&q=${timeDate}`
      console.log(url);
      
      return this.http.get(url).toPromise();
      }

  public getHistory(Name:any): Promise<any> {
      var url = `https://script.google.com/macros/s/AKfycby4JwLdqA70li3Vycy6ZzB_ysRR4QNiFxcr7Onxvd9YnczOoivG5OqTyavyFJEqaYhE/exec?q=1&h=${Name}`
      return this.http.get(url).toPromise();
      }
  public getFinancial(velue:any): Promise<any> {
      var url = `https://script.google.com/macros/s/AKfycbxumio0dr-scl3Ykpim05rH_O_lD3NiUuKBPvB4b2uBlkjA4hz8fenxgJxalC5kF4Z_/exec?time=${velue}`
      return this.http.get(url).toPromise();
      }
}
