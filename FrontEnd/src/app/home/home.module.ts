import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SlickCarouselModule } from 'ngx-slick-carousel'; 


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    SlickCarouselModule
  ]
})
export class HomeModule { }
