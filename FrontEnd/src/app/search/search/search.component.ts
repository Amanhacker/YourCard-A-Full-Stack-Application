import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Payment } from 'src/app/payment/payment';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  paymentList: Payment[] = [];
  searchparam = new FormControl();
  constructor(private searchService: SearchService, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  getPaymentDetails(keyword) {
    let param;
    param = this.searchparam.value;
    console.log(param);
    if (param == "outlet") {
      this.searchService.searchPaymentsByOutlet(this.authService.getUserId(), keyword)
        .then(response => this.paymentList = response);
    }
    else if (param == "category") {
      this.searchService.searchPaymentsByCategory(this.authService.getUserId(), keyword)
        .then(response => this.paymentList = response);
    }
    else if (param == "city") {
      this.searchService.searchPaymentsByCity(this.authService.getUserId(), keyword)
        .then(response => this.paymentList = response);
    }
    else if (param == "country") {
      this.searchService.searchPaymentsByCountry(this.authService.getUserId(), keyword)
        .then(response => this.paymentList = response);
    }
    else if (param == "year") {
      this.searchService.searchPaymentsByYear(this.authService.getUserId(), keyword)
        .then(response => this.paymentList = response);
        console.log(this.paymentList);
    }
  }
}
