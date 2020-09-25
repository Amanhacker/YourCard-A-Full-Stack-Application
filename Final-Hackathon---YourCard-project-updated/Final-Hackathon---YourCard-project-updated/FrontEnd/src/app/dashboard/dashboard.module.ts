import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }
