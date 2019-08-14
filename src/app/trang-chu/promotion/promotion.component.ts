import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-promotion",
  templateUrl: "./promotion.component.html",
  styleUrls: ["./promotion.component.scss"]
})
export class PromotionComponent implements OnInit {
  imgs: string[];
  constructor() {
    this.imgs = ["promotion_1.png", "promotion_2.png", "promotion_3.jpg"];
  }

  ngOnInit() {}
}
