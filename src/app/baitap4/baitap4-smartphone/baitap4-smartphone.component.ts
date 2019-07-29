import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-baitap4-smartphone',
  templateUrl: './baitap4-smartphone.component.html',
  styleUrls: ['./baitap4-smartphone.component.scss']
})
export class Baitap4SmartphoneComponent implements OnInit {
  phones: any;
  constructor() {
    this.phones = [
      {name: 'iPhone X', description: 'iPhone X features a new all-screen design. Face ID, which makes your face your password', img:'sp_iphoneX.png'},
      {name: 'Galaxy Note7', description: 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason', img:'sp_note7.png'},
      {name: 'Galaxy Note7', description: 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason', img:'sp_vivo850.png'},
      {name: 'Galaxy Note7', description: 'The Galaxy Note7 comes with a perfectly symmetrical design for good reason', img:'sp_blackberry.png'},
    ]
  }
  ngOnInit() {
  }

}
