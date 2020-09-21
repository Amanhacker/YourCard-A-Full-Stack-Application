import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  paymentList;
  errMessage: string;

  constructor(private paymentService: PaymentService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.paymentList = this.paymentService.getAllPayments(this.authService.getUserId()).subscribe(data => {
      console.log(data);
    },
      error => {
        this.errMessage = error;
      });
  };
}


