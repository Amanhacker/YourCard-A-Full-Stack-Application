import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactusComponent } from "./contactus/contactus.component";

import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ContactusComponent],
  imports: [CommonModule, FormsModule],
})
export class ContactusModule {}
