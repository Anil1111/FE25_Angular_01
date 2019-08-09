import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
@Component({
  selector: "app-item-ghe",
  templateUrl: "./item-ghe.component.html",
  styleUrls: ["./item-ghe.component.scss"]
})
export class ItemGheComponent implements OnInit {
  trangThaiDatGhe: boolean = false;
  count: number = 0;
  @Input() ghe;
  @Output() eventDatGhe = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  isChonGhe(ghe) {
    this.count++;
    if (this.count > 1) {
      this.trangThaiDatGhe = true;
    } else {
      this.trangThaiDatGhe = !this.trangThaiDatGhe;
    }
    //if (this.trangThaiDatGhe === false)
    this.eventDatGhe.emit(ghe);
  }
}
