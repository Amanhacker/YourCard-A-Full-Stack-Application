import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { RegisterService } from "src/app/services/register.service";
import { RouterService } from "src/app/services/router.service";
import { User } from "./user";

// // import custom validator to validate that password and confirm password fields match
// import { MustMatch } from './_helpers/must-match.validator';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  registerMessage: string;
  user: User;

  id = new FormControl(
    "",
    Validators.compose([
      Validators.required,
      Validators.pattern("^[A-Za-z]+(?: +[A-Za-z]+)*$"),
    ])
  );
  dob = new FormControl("", Validators.compose([Validators.required]));
  aadhaarNo = new FormControl(
    "",
    Validators.compose([Validators.required, Validators.pattern("^[0-9]{12}$")])
  );
  panNo = new FormControl(
    "",
    Validators.compose([
      Validators.required,
      Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}"),
    ])
  );
  houseNo = new FormControl("", Validators.compose([Validators.required]));
  district = new FormControl(
    "",
    Validators.compose([
      Validators.required,
      Validators.pattern("^[A-Za-z]+(?: +[A-Za-z]+)*$"),
    ])
  );
  state = new FormControl(
    "",
    Validators.compose([
      Validators.required,
      Validators.pattern("^[A-Za-z]+(?: +[A-Za-z]+)*$"),
    ])
  );
  country = new FormControl(
    "",
    Validators.compose([
      Validators.required,
      Validators.pattern("^[A-Za-z]+(?: +[A-Za-z]+)*$"),
    ])
  );
  password = new FormControl(
    "",
    Validators.compose([Validators.required, Validators.minLength(5)])
  );
  conpassword = new FormControl(
    "",
    Validators.compose([Validators.required, Validators.minLength(5)])
  );
  // amount = new FormControl(
  //   "",
  //   Validators.compose([Validators.required, Validators.pattern("^[0-9]+$")])
  // );
  customerId = new FormControl();
  cardNo = new FormControl();

  constructor(
    private registerService: RegisterService,
    private routerService: RouterService
  ) {}

  ngOnInit() {}

  register() {
    this.user = {
      id: this.id.value,
      dob: this.dob.value,
      aadhaarNo: this.aadhaarNo.value,
      panNo: this.panNo.value,
      houseNo: this.houseNo.value,
      district: this.district.value,
      state: this.state.value,
      country: this.country.value,
      password: this.password.value,
      // amount: this.amount.value,
      customerId: Math.floor(10000000 + Math.random() * 90000000),
      cardNo: Math.floor(100000000000 + Math.random() * 900000000000),
    };
    // {
    //   validator: MustMatch('password', 'confirmPassword')
    // };

    if (this.user["country"] === "India") {
      this.user["baseCurrency"] = "INR";
    } else if (this.user["country"] === "US") {
      this.user["baseCurrency"] = "USD";
    }

    this.user["amount"] = 10000;

    this.registerService.registerUser(this.user).subscribe(
      (data) => {
        console.log(data);
        this.registerMessage = "Registration successful";
        this.routerService.routeToLogin();
      },
      (err) => {
        this.registerMessage = "You're already registered, try login instead!";
      }
    );
  }

  getIdErrorMessage() {
    if (this.id.touched && this.id.hasError("required")) {
      return "Username is required";
    } else if (this.id.touched && this.id.hasError("pattern")) {
      return "Username can only contain alphabetic characters";
    }
  }

  getDobErrorMessage() {
    if (this.dob.touched && this.dob.hasError("required")) {
      return "Date of Birth is required";
    }
  }

  getAadhaarNoErrorMessage() {
    if (this.aadhaarNo.touched && this.aadhaarNo.hasError("required")) {
      return "Aadhaar no. is required";
    } else if (this.aadhaarNo.touched && this.aadhaarNo.hasError("pattern")) {
      return "Aadhaar number should contain only 12 numeric characters";
    }
  }

  getPanNoErrorMessage() {
    if (this.panNo.touched && this.panNo.hasError("required")) {
      return "Pan no. is required";
    } else if (this.panNo.touched && this.panNo.hasError("pattern")) {
      return "Pan number should be 7 in length and in correct format (ABCDE1234A)";
    }
  }

  getHouseNoErrorMessage() {
    if (this.houseNo.touched && this.houseNo.hasError("required")) {
      return "House no. is required";
    }
  }

  getDistrictErrorMessage() {
    if (this.district.touched && this.district.hasError("required")) {
      return "District is required";
    } else if (this.district.touched && this.district.hasError("pattern")) {
      return "District can only contain alphabetic characters";
    }
  }

  getStateErrorMessage() {
    if (this.state.touched && this.state.hasError("required")) {
      return "State is required";
    } else if (this.state.touched && this.state.hasError("pattern")) {
      return "State can only contain alphabetic characters";
    }
  }

  getCountryErrorMessage() {
    if (this.country.touched && this.country.hasError("required")) {
      return "Country is required";
    } else if (this.country.touched && this.country.hasError("pattern")) {
      return "Country can only contain alphabetic characters";
    }
  }

  getPasswordErrorMessage() {
    if (this.password.touched && this.password.hasError("required")) {
      return "Password is required";
    } else if (this.password.touched && this.password.hasError("minlength")) {
      return "Minimum length of password should be 5";
    }
  }

  getConPasswordErrorMessage() {
    if (this.conpassword.touched && this.conpassword.hasError("required")) {
      return "Confirm password is required";
    } else if (
      this.conpassword.touched &&
      this.conpassword.hasError("minlength")
    ) {
      return "Minimum length of confirm password should be 5";
    }
  }

  // getAmountErrorMessage() {
  //   if (this.amount.touched && this.amount.hasError("required")) {
  //     return "Amount is required";
  //   } else if (this.amount.touched && this.amount.hasError("pattern")) {
  //     return "Amount can only contain numeric characters";
  //   }
  // }
}
