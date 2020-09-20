import { Component, OnInit } from '@angular/core';
import { Payment } from '../payment';
import { FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public payment: Payment;
  id = new FormControl();
  year = new FormControl();
  country = new FormControl();
  category = new FormControl();
  outlet = new FormControl();

  constructor(private authenticationService: AuthenticationService) { }
  
  ngOnInit() {
  }

  addPayment() {
    this.payment = {
      id: this.id.value,
      customer: this.authenticationService.getUserId(),
      year: this.year.value,
      country: this.country.value,
      category: this.category.value,
      outlet: this.outlet.value
    }
  console.log(this.payment);
  }

}
