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
    //   const grid= '0';
    //   const select = 'รายชื่อขึ้นทะเบียนพนักงาน'
    //   const key = 'AIzaSyDKxbuNSYP_40qaY_yjq9ieg93adG84irc';
    //  const sheetId = "1_MddvfWxaUqKxTEqGZswpSVrGvc0wHVaxXV30XX2BUQ"
    //  var url = 'https://docs.google.com/spreadsheets/d/'+ sheetId +'/gviz/tq?tqx=out:json&tq&gid='+ grid + '&key=' + key;
      // var url = 'https://sheets.googleapis.com/v4/spreadsheets/' + sheetId + '?fields=sheets.data&key='+ key;
      // var url = 'https://sheets.googleapis.com/v4/spreadsheets/' + sheetId + '/values/' + grid + '?alt=json&key=' + key; 
      var url = "https://script.googleusercontent.com/macros/echo?user_content_key=2MXfDn9hLtoNJSfQxcgCmXiThI3sFaocijFvgcjnPsHRur6TjlhP5VyJXcfBQbxiLaXHZL62B6VSI586YcTYBEAUcEGbxWCPm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMmXEeItSy7W1RXAUIYr-T9yM90A1vLi9-hXtNUakXfUTGmxQWRp4aGLpC2fXTvUwPj3wBZfJBfZ8gzsAFPTwjalhP8dluGinQ&lib=MT9ByW3kDOXYSay5zU0lbXDhu1KL008Ao"
      return this.http.get(url).toPromise();
      }
}
