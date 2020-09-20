import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';
import { RouterService } from 'src/app/services/router.service';
import { User } from './user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  id = new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)]));
  password = new FormControl('', Validators.compose([Validators.required, Validators.minLength(5)]));
  user: User;
  registerMessage: string;
  userId;

  constructor(private registerService: RegisterService, private routerService: RouterService) {
    this.registerMessage = '';
  }

  ngOnInit() {
  }

  registerSubmit() {
    this.user = {
      id: this.id.value,
      password: this.password.value
    };
    this.registerService.registerUser(this.user).subscribe(
      data => {
        console.log(data);
        this.registerMessage = "Registartion successful"
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
