import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ngif",
  templateUrl: "./ngif.component.html",
  styleUrls: ["./ngif.component.scss"]
})
export class NgifComponent implements OnInit {
  status: boolean;
  statusLogin: boolean = false;
  constructor() {}
  show() {
    this.status = true;
  }
  hide() {
    this.status = false;
  }
  Login() {
    this.statusLogin = true;
  }
  SignOut() {
    this.statusLogin = false;
  }
  ngOnInit() {}
}
