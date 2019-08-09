import { Component, OnInit, ViewChildren, QueryList } from "@angular/core";
import { ItemPhimComponent } from "./../item-phim/item-phim.component";
@Component({
  selector: "app-danh-sach-phim",
  templateUrl: "./danh-sach-phim.component.html",
  styleUrls: ["./danh-sach-phim.component.scss"]
})
export class DanhSachPhimComponent implements OnInit {
  @ViewChildren(ItemPhimComponent) tagListItemPhim: QueryList<
    ItemPhimComponent
  >;
  danhSachPhim = [
    {
      maPhim: 1,
      tenPhim: "Minions",
      gia: "22",
      hinhAnh: "assets/img/minions.jpg"
    },
    {
      maPhim: 2,
      tenPhim: "Home",
      gia: "85000",
      hinhAnh: "assets/img/home.jpg"
    },
    {
      maPhim: 3,
      tenPhim: "Harvie",
      gia: "85000",
      hinhAnh: "assets/img/harvie.jpg"
    },
    {
      maPhim: 4,
      tenPhim: "Insideout",
      gia: "85000",
      hinhAnh: "assets/img/insideout.jpg"
    }
  ];
  danhSachLike = [
    { maPhim: 1, tenPhim: "Minions", soLike: 0 },
    { maPhim: 2, tenPhim: "Home", soLike: 0 },
    { maPhim: 3, tenPhim: "Harvie", soLike: 0 },
    { maPhim: 4, tenPhim: "Insideout", soLike: 0 }
  ];
  isClicked(phim) {
    console.log(phim);
    // this.danhSachLike.map(item => {
    //   if (item.maPhim === phim.maPhim) {
    //     item.soLike++;
    //   }
    // });
    let movie = this.danhSachLike.find(item => {
      return item.maPhim === phim.maPhim;
    });
    movie.soLike++;
  }
  themPhim(phim) {
    this.danhSachPhim.push(phim);
  }
  viewChildren() {
    this.tagListItemPhim.map(item => {
      if (item.phim.maPhim === 2) {
        item.phim.gia = 200;
      }
    });
  }
  constructor() {}

  ngOnInit() {}
}
