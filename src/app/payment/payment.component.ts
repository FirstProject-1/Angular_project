import { Component, OnInit } from '@angular/core';
import { PaymentClass } from './payment-class';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private pay:PaymentService) { }
public cardModel=new  PaymentClass('','')

onSubmit() {
  // console.log(this.cardModel)
  this.pay.payment(this.cardModel).subscribe(
    response => console.log('payment done', response),
    error => console.log('error',error)
    )

  }
  ngOnInit() {
  }

}
