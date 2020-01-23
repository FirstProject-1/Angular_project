import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentClass } from './payment-class';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor( private http:HttpClient) { }
  public payment(pay: PaymentClass){
    return this.http.post('http://localhost:8080/payment/pay',pay);
  }
}
