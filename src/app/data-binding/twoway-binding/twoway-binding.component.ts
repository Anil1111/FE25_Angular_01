import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-twoway-binding",
  templateUrl: "./twoway-binding.component.html",
  styleUrls: ["./twoway-binding.component.scss"]
})
export class TwowayBindingComponent implements OnInit {
  name: string = "Cybersoft";
  email: string;
  fullname: string = "";
  score: number = 0;
  constructor() {}

  isClicked(value: string): void {
    this.fullname = value;
  }
  ngOnInit() {}
}
