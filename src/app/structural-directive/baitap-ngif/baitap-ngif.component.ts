import { Component, OnInit } from "@angular/core";
import { stringify } from "@angular/compiler/src/util";

@Component({
  selector: "app-baitap-ngif",
  templateUrl: "./baitap-ngif.component.html",
  styleUrls: ["./baitap-ngif.component.scss"]
})
export class BaitapNgifComponent implements OnInit {
  email_check: string = "cybersoft";
  password_check: any = "cybersoft";
  statusLogin: boolean = true;
  constructor() {}
  isChecked(email: string, password: string) {
    if (this.email_check === email && this.password_check === password) {
      this.statusLogin = false;
      console.log("hello dung roi!!");
      localStorage.setItem("check", stringify("cybersoft"));
    } else {
      this.statusLogin = true;
    }
  }
  Logout() {
    this.statusLogin = true;
    localStorage.clear();
  }
  ngOnInit() {
    var allcookies = localStorage.getItem("check");
    if (allcookies === "cybersoft") {
      this.statusLogin = false;
    }
  }
}
