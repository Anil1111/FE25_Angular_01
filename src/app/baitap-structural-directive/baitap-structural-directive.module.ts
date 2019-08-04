import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BaitapStructuralDirectiveComponent } from "./baitap-structural-directive.component";
import { NgxPaginationModule } from "ngx-pagination";
@NgModule({
  declarations: [BaitapStructuralDirectiveComponent],
  exports: [BaitapStructuralDirectiveComponent],
  imports: [CommonModule, NgxPaginationModule]
})
export class BaitapStructuralDirectiveModule {}
