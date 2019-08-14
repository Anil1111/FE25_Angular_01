import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-laptop",
  templateUrl: "./laptop.component.html",
  styleUrls: ["./laptop.component.scss"]
})
export class LaptopComponent implements OnInit {
  @Input() laptop: any;
  @Output() clickedLaptop = new EventEmitter();
  @Output() clickedDetailLaptop = new EventEmitter();
  isButtonDesClicked: boolean = false;
  constructor() {}
  showDesLaptop() {
    const laptop = {
      trangthai: this.isButtonDesClicked,
      laptop: this.laptop
    };
    this.clickedLaptop.emit(laptop);
  }
  showDetail() {
    this.clickedDetailLaptop.emit(this.laptop);
  }
  ngOnInit() {}
}
