import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { LoginComponent } from './login/login/login.component';
import { PaymentComponent } from './payment/payment/payment.component';
import { RegisterComponent } from './register/register/register.component';
import { PagenotfoundexceptionComponent } from './pagenotfoundexception/pagenotfoundexception/pagenotfoundexception.component';
import { HomeComponent } from './home/home/home.component';
import { ContactusComponent } from './contactus/contactus/contactus.component';


const routes: Routes =  [

  { path: 'dashboard', component: DashboardComponent},
  { path: 'payment', component: PaymentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PagenotfoundexceptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
