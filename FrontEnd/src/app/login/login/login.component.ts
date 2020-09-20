import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { User } from './user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // id = new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)]));
  // password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)]));
  // user: User;
  // loginMessage: string;

  public loginForm: FormGroup;
  public username = new FormControl();
  public password = new FormControl();
  public submitMessage: string;

  constructor(private authService: AuthenticationService, private routerService: RouterService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl()
    });
  }
  
  loginSubmit() {
    // const token = this.authService.authenticateUser(this.loginForm.value);
    // if (token !== undefined) {
    //   this.authService.setBearerToken(token);
    //   this.authService.setUser(this.loginForm.value.username);
    //   this.routerService.routeToHome();
    // } else {
    //   this.routerService.routeToLogin();
    // }
  }
  
  // getuserIdErrorMessage() {
  //   if (this.id.touched && this.id.hasError('required')) {
  //     return 'Username is required';
  //   } else if (this.id.touched && this.id.hasError('minlength')) {
  //     return 'Minimum length of username should be 5';
  //   }
  // }
  // getPasswordErrorMessage() {
  //   if (this.password.touched && this.password.hasError('required')) {
  //     return 'Password is required';
  //   } else if (this.password.touched && this.password.hasError('minlength')) {
  //     return 'Minimum length of password should be 5';
  //   }
  // }
}


