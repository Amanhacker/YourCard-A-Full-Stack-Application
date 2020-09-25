import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }

  searchPaymentsByOutlet(userId, outlet){
    return fetch(`http://localhost:8765/paymentservice/allPaymentsByOutlet/${userId}/${outlet}`)
      .then(response => response.json());
  }

  searchPaymentsByCategory(userId, category){
    return fetch(`http://localhost:8765/paymentservice/allPaymentsByCategory/${userId}/${category}`)
      .then(response => response.json());
  }

  searchPaymentsByCity(userId, city){
    return fetch(`http://localhost:8765/paymentservice/allPaymentsByCity/${userId}/${city}`)
      .then(response => response.json());
  }

  searchPaymentsByCountry(userId, country){
    return fetch(`http://localhost:8765/paymentservice/allPaymentsByCountry/${userId}/${country}`)
      .then(response => response.json());
  }
  searchPaymentsByYear(userId, year){
    return fetch(`http://localhost:8765/paymentservice/allPaymentsByYear/${userId}/${year}`)
      .then(response => response.json());
  }
}
