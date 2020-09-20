import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { RouterService } from 'src/app/services/router.service';
import { User } from './user';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  loading = false;
  submitted = false;
  error: string;
  user: User;

  id = new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)]));
  DOB = new FormControl('', Validators.compose([Validators.required]));
  aadharNo = new FormControl('', Validators.compose([Validators.required]));
  panNo = new FormControl('', Validators.compose([Validators.required]));
  houseNo = new FormControl('', Validators.compose([Validators.required]));
  district = new FormControl('', Validators.compose([Validators.required]));
  state = new FormControl('', Validators.compose([Validators.required]));
  country = new FormControl('', Validators.compose([Validators.required]));
  password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)]));
  amount = new FormControl('', Validators.compose([Validators.required]));
  registerMessage: string;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private registerService: RegisterService,
    private routerService: RouterService) {

    this.registerMessage = '';
    // if (this.authenticationService.currentUserValue) {
    //   this.router.navigate(['\']);
    // }
  }

  ngOnInit() {
  }

  register() {
    this.user = {
      id: this.id.value,
      DOB: this.DOB.value,
      aadharNo: this.aadharNo.value,
      panNo: this.panNo.value,
      houseNo: this.houseNo.value,
      district: this.district.value,
      state: this.state.value,
      country: this.country.value,
      password: this.password.value,
      amount: this.amount.value
    };
    this.registerService.registerUser(this.user).subscribe(
      data => {
        console.log(data);
        this.registerMessage = "Registration successful"
        this.routerService.routeToLogin();
      },
      err => {
        this.registerMessage = err;
      }
    );
  }


  getuserIdErrorMessage() {
    if (this.id.touched && this.id.hasError('required')) {
      return 'Username is required';
    } else if (this.id.touched && this.id.hasError('minlength')) {
      return 'Minimum length of username should be 5';
    }
  }

  getPasswordErrorMessage() {
    if (this.password.touched && this.password.hasError('required')) {
      return 'Password is required';
    } else if (this.password.touched && this.password.hasError('minlength')) {
      return 'Minimum length of password should be 5';
    }
  }

}
