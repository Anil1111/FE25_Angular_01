import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Baitap4Component } from '../baitap4/baitap4.component';
import { Baitap4HeaderComponent } from './baitap4-header/baitap4-header.component';
import { Baitap4CarouselComponent } from './baitap4-carousel/baitap4-carousel.component';
import { Baitap4SmartphoneComponent } from './baitap4-smartphone/baitap4-smartphone.component';
import { Baitap4LaptopComponent } from './baitap4-laptop/baitap4-laptop.component';
import { Baitap4PromotionComponent } from './baitap4-promotion/baitap4-promotion.component';



@NgModule({
  declarations: [Baitap4Component, Baitap4HeaderComponent, Baitap4CarouselComponent, Baitap4SmartphoneComponent, Baitap4LaptopComponent, Baitap4PromotionComponent],
  exports:  [Baitap4Component, Baitap4HeaderComponent, Baitap4CarouselComponent, Baitap4SmartphoneComponent, Baitap4LaptopComponent, Baitap4PromotionComponent],
  imports: [
    CommonModule
  ]
})
export class Baitap4Module { }
