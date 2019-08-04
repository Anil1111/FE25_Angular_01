import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-baitap-ngfor",
  templateUrl: "./baitap-ngfor.component.html",
  styleUrls: ["./baitap-ngfor.component.scss"]
})
export class BaitapNgforComponent implements OnInit {
  masp: string;
  tensp: string;
  price: number;
  isClicked: boolean = false;
  mangSP: Array<any> = [];
  sp: object = {};
  
  xuLy(masp, tensp, price) {
    console.log(masp, tensp, price);
    this.isClicked = true;
    this.sp = {
      ma: masp,
      ten: tensp,
      price: price
    };
    this.mangSP.push(this.sp);
    console.log(this.mangSP);
  }

  constructor() {}
  ngOnInit() {}
}
