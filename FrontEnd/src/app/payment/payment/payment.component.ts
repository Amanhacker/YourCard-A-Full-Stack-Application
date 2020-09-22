import { Component, OnInit } from '@angular/core';
import { Payment } from '../payment';
import { FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public payment: Payment;
  // id = new FormControl();
  month = new FormControl();
  year = new FormControl();
  city = new FormControl();
  country = new FormControl();
  category = new FormControl();
  outlet = new FormControl();
  amount = new FormControl();
  errMessage: string;

  constructor(private authenticationService: AuthenticationService, private paymentService: PaymentService, private routerService: RouterService) { }

  ngOnInit() {
  }

  addPayment() {
    this.payment = {
      id: 1,
      customer: this.authenticationService.getUserId(),
      month: this.month.value,
      year: this.year.value,
      city: this.month.value,
      country: this.country.value,
      category: this.category.value,
      outlet: this.outlet.value,
      amount: this.amount.value
    }
    this.paymentService.addUserPaymentData(this.payment).subscribe(data => {
      console.log(data);
      this.routerService.routeToDashboard();
    },
      error => {
        this.errMessage = error;
      });
  };
}

