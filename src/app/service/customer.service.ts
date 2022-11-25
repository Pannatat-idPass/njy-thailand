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
      var url = "https://script.googleusercontent.com/macros/echo?user_content_key=2MXfDn9hLtoNJSfQxcgCmXiThI3sFaocijFvgcjnPsHRur6TjlhP5VyJXcfBQbxiLaXHZL62B6VSI586YcTYBEAUcEGbxWCPm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnMmXEeItSy7W1RXAUIYr-T9yM90A1vLi9-hXtNUakXfUTGmxQWRp4aGLpC2fXTvUwPj3wBZfJBfZ8gzsAFPTwjalhP8dluGinQ&lib=MT9ByW3kDOXYSay5zU0lbXDhu1KL008Ao"
      return this.http.get(url).toPromise();
      }
}
