import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-smart-phone",
  templateUrl: "./smart-phone.component.html",
  styleUrls: ["./smart-phone.component.scss"]
})
export class SmartPhoneComponent implements OnInit {
  @Input() smartphone: any;
  @Output() clickedPhone = new EventEmitter();
  @Output() clickedDetail = new EventEmitter();
  isButtonDesClicked: boolean = false;
  constructor() {}
  showDesPhone() {
    const phone = {
      trangthai: this.isButtonDesClicked,
      smartphone: this.smartphone
    };
    this.clickedPhone.emit(phone);
  }
  showDetail() {
    this.clickedDetail.emit(this.smartphone);
  }
  ngOnInit() {}
}
