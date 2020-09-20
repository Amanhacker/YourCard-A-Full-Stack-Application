import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router) { }

  routeToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  routeToPayment() {
    this.router.navigate(['/payment']);
  }

  routeToRegister() {
    this.router.navigate(['/register']);
  }

  routeToLogin() {
    this.router.navigate(['/login']);
  }
}
