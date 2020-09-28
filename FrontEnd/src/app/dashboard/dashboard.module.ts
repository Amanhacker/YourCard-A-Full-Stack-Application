import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MatCardModule } from "@angular/material";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, MatCardModule, FormsModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
