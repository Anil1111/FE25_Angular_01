import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-item-phim",
  templateUrl: "./item-phim.component.html",
  styleUrls: ["./item-phim.component.scss"]
})
export class ItemPhimComponent implements OnInit {
  @Input() phim;
  @Output() eventPhim = new EventEmitter();
  isLiked() {
    this.eventPhim.emit(this.phim);
  }
  constructor() {}

  ngOnInit() {}
}
