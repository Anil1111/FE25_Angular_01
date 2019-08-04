import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "angulartest";
  Score: number;
  constructor() {
    this.Score = 10;
  }
  loginHandlerAtParent(event) {
    console.log(event); // Output: Object {userId: "sampleUser", password: "samplePassword"}
  }
}
