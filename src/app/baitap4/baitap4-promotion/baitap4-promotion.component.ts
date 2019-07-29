import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap4-promotion',
  templateUrl: './baitap4-promotion.component.html',
  styleUrls: ['./baitap4-promotion.component.scss']
})
export class Baitap4PromotionComponent implements OnInit {
  imgs: string[];
  constructor() {
    this.imgs = ['promotion_1.png', 'promotion_2.png', 'promotion_3.jpg'];
   }

  ngOnInit() {
  }

}
