import { Component, OnInit } from "@angular/core";
import { Payment } from "../payment";
import { FormControl, Validators } from "@angular/forms";
import { AuthenticationService } from "src/app/services/authentication.service";
import { PaymentService } from "src/app/services/payment.service";
import { RouterService } from "src/app/services/router.service";

@Component({
  selector: "app-payment",
  templateUrl: "./payment.component.html",
  styleUrls: ["./payment.component.css"],
})
export class PaymentComponent implements OnInit {

  public payment: Payment;
  paymentMessage: string;

  month = new FormControl('', Validators.compose([Validators.required]));
  year = new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]{4}$')]));
  city = new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[A-Za-z]+(?: +[A-Za-z]+)*$')]));
  country = new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[A-Za-z]+(?: +[A-Za-z]+)*$')]));
  category = new FormControl('', Validators.compose([Validators.required]));
  outlet = new FormControl('', Validators.compose([Validators.required]));
  amount = new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]+$')]));


  constructor(
    private authenticationService: AuthenticationService,
    private paymentService: PaymentService,
    private routerService: RouterService
  ) { }

  ngOnInit() { }

  addPayment() {
    this.payment = {
      id: 1,
      customer: this.authenticationService.getUserId(),
      month: this.month.value,
      year: 2019,
      city: this.city.value,
      country: this.country.value,
      category: this.category.value,
      outlet: this.outlet.value,
      amount: this.amount.value,
    };
    this.paymentService.addUserPaymentData(this.payment).subscribe(
      data => {
        this.paymentMessage = "Payment successful"
        this.routerService.routeToDashboard();
      },
      error => {
        this.paymentMessage = error.message;
      }
    );
  }
  getMonthErrorMessage() {
    if (this.month.touched && this.month.hasError('required')) {
      return 'Month is required';
    }
  }

  getYearErrorMessage() {
    if (this.year.touched && this.year.hasError('required')) {
      return 'Year is required';
    } else if (this.year.touched && this.year.hasError('pattern')) {
      return 'Year should be in correct format (yyyy)';
    }
  }
  getCityErrorMessage() {
    if (this.city.touched && this.city.hasError('required')) {
      return 'City is required';
    } else if (this.city.touched && this.city.hasError('pattern')) {
      return 'City can only contain alphabetic characters';
    }
  }
  getCountryErrorMessage() {
    if (this.country.touched && this.country.hasError('required')) {
      return 'Country is required';
    } else if (this.country.touched && this.country.hasError('pattern')) {
      return 'Country can only contain alphabetic characters';
    }
  }

  getCategoryErrorMessage() {
    if (this.category.touched && this.category.hasError('required')) {
      return 'Category is required';
    }
  }


  getOutletErrorMessage() {
    if (this.outlet.touched && this.outlet.hasError('required')) {
      return 'Outlet is required';
    }
  }

  getAmountErrorMessage() {
    if (this.amount.touched && this.amount.hasError('required')) {
      return 'Amount is required';
    } else if (this.amount.touched && this.amount.hasError('pattern')) {
      return 'Amount can only contain numeric characters';
    }
  }

}