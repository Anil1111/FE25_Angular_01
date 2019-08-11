import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
@Component({
  selector: "app-item-ghe",
  templateUrl: "./item-ghe.component.html",
  styleUrls: ["./item-ghe.component.scss"]
})
export class ItemGheComponent implements OnInit {
  trangThaiDatGhe: boolean = false;
  @Input() ghe;
  @Output() eventDatGhe = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  isChonGhe() {
    this.trangThaiDatGhe = !this.trangThaiDatGhe;
    //if (this.trangThaiDatGhe === false)
    const objGhe = {
      ghe: this.ghe,
      trangthai: this.trangThaiDatGhe
    };
    this.eventDatGhe.emit(objGhe);
  }
}
