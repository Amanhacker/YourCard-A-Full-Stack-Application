import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { FooterModule} from './footer/footer.module';
import { DashboardModule} from './dashboard/dashboard.module';
import { PaymentModule} from './payment/payment.module';
import { LoginModule} from './login/login.module';
import { RegisterModule} from './register/register.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterService } from './services/router.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    DashboardModule,
    PaymentModule,
    LoginModule,
    RegisterModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, RouterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
