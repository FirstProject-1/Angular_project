import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentClass } from './payment-class';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor( private _http:HttpClient) { }

  public payment(pay){
    console.log(pay)
    return this._http.post('http://localhost:8080/payment/pay',pay);
  }
}
