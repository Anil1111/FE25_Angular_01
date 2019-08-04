import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataBindingComponent } from "../data-binding/data-binding.component";
import { OnewayBindingComponent } from "./oneway-binding/oneway-binding.component";
import { TwowayBindingComponent } from "./twoway-binding/twoway-binding.component";
// improt formModule
import { FormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    DataBindingComponent,
    OnewayBindingComponent,
    TwowayBindingComponent
  ],
  exports: [
    DataBindingComponent,
    OnewayBindingComponent,
    TwowayBindingComponent
  ],
  imports: [CommonModule, FormsModule]
})
export class DataBindingModule {}
