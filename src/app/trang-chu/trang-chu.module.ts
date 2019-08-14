import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TrangChuComponent } from "./trang-chu.component";
import { HeaderComponent } from './header/header.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { PromotionComponent } from './promotion/promotion.component';
import { SmartPhoneComponent } from './product-item/smart-phone/smart-phone.component';
import { LaptopComponent } from './product-item/laptop/laptop.component';
import { ModalComponent } from './product-item/modal/modal.component';

@NgModule({
  declarations: [TrangChuComponent, HeaderComponent, CarouselComponent, ProductItemComponent, PromotionComponent, SmartPhoneComponent, LaptopComponent, ModalComponent],
  exports: [TrangChuComponent],
  imports: [CommonModule]
})
export class TrangChuModule {}
