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
  
  id = new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)]));
  password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)]));
  user: User;
  registerMessage: string;
  userId;

  constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private registerService: RegisterService,
        private routerService: RouterService) {
      
          this.registerMessage = '';
          // if (this.authenticationService.currentUserValue) {
          //   this.router.navigate(['\']);
          // }
  }

  ngOnInit() : any {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  registerSubmit() {
    this.user = {
      id: this.id.value,
      password: this.password.value
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
