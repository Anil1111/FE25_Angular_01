import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AtrributeDirectiveComponent } from "./atrribute-directive.component";
import { NgClassComponent } from "./ng-class/ng-class.component";
import { NgStyleComponent } from "./ng-style/ng-style.component";
import { BaitapNgforComponent } from "./baitap-ngfor/baitap-ngfor.component";
import { HighLightDirective } from './high-light.directive';

@NgModule({
  declarations: [
    AtrributeDirectiveComponent,
    NgClassComponent,
    NgStyleComponent,
    BaitapNgforComponent,
    HighLightDirective
  ],
  exports: [
    AtrributeDirectiveComponent,
    NgClassComponent,
    AtrributeDirectiveComponent,
    BaitapNgforComponent
  ],
  imports: [CommonModule]
})
export class AtrributeDirectiveModule {}
