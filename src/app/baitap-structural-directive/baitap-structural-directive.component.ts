import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-baitap-structural-directive",
  templateUrl: "./baitap-structural-directive.component.html",
  styleUrls: ["./baitap-structural-directive.component.scss"]
})
export class BaitapStructuralDirectiveComponent implements OnInit {
  masp: string;
  tensp: string;
  price: number;
  sp: Object;
  mangSanPham: Array<any> = [
    { MaSP: 1, TenSP: "Sony XZ", Gia: 1000 },
    { MaSP: 2, TenSP: "Sony XZ2", Gia: 1000 },
    { MaSP: 3, TenSP: "HTC U Ultra", Gia: 1000 },
    { MaSP: 4, TenSP: "HTC U12 Plus", Gia: 1000 },
    { MaSP: 5, TenSP: "Iphone XS MAX", Gia: 1000 },
    { MaSP: 6, TenSP: "Iphone XR", Gia: 1000 },
    { MaSP: 7, TenSP: "Xiaomi Mi Note 3", Gia: 9900 },
    { MaSP: 8, TenSP: "Xiaomi Mi 8", Gia: 1000 },
    { MaSP: 9, TenSP: "Galaxy Note 9", Gia: 1000 },
    { MaSP: 10, TenSP: "Galaxy S9 Plus", Gia: 1000 },
    { MaSP: 11, TenSP: "Nokia X9", Gia: 1000 }
  ];
  p: number = 1;
  collection: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10.11, 12, 13, 14, 15, 15];
  themsp(masp, tensp, price) {
    this.sp = {
      MaSP: masp,
      TenSP: tensp,
      Gia: price
    };
    this.mangSanPham.push(this.sp);
  }
  xoa(sanpham) {
    this.mangSanPham.splice(this.mangSanPham.indexOf(sanpham), 1);
  }
  constructor() {}

  ngOnInit() {}
}
