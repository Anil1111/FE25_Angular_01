import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StructuralDirectiveComponent } from "./structural-directive.component";
import { NgifComponent } from "./ngif/ngif.component";
import { BaitapNgifComponent } from "./baitap-ngif/baitap-ngif.component";
import { NgSwitchComponent } from "./ng-switch/ng-switch.component";
import { NgForComponent } from "./ng-for/ng-for.component";

@NgModule({
  declarations: [
    StructuralDirectiveComponent,
    NgifComponent,
    BaitapNgifComponent,
    NgSwitchComponent,
    NgForComponent
  ],
  exports: [
    StructuralDirectiveComponent,
    NgifComponent,
    BaitapNgifComponent,
    NgSwitchComponent,
    NgForComponent
  ],
  imports: [CommonModule]
})
export class StructuralDirectiveModule {}
