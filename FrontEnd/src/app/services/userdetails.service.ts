import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {

  constructor(private httpClient: HttpClient) { }

  getCurrentBalance(userId) {
    return this.httpClient.get(`http://localhost:8765/authenticationservice/getUserBalance/${userId}`);
  }

  getCustomerId(userId) {
    return this.httpClient.get(`http://localhost:8765/authenticationservice/getCustomerId/${userId}`);
  }

  getCardNo(userId) {
    return this.httpClient.get(`http://localhost:8765/authenticationservice/getCardNo/${userId}`);
  }
}
