import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/router.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  submit() {
    this.router.navigate(['/home']);
  }

}
