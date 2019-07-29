import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-baitap4-laptop',
  templateUrl: './baitap4-laptop.component.html',
  styleUrls: ['./baitap4-laptop.component.scss']
})
export class Baitap4LaptopComponent implements OnInit {
  laptops: any;
  constructor() { 
    this.laptops = [
      {name: 'MACBOOK', description: 'The MacBook is a brand of notebook computers manufactured by Apple Inc', img:'lt_macbook.png'},
      {name: 'ASUS ROG', description: 'the Asus ROG Strix Flare is the latest addition to Asus "lineup of ROG branded devices"', img:'lt_rog.png'},
      {name: 'HP OMEN', description: 'A young global smartphone brand focusing on introducing perfect sound quality', img:'lt_hp.png'},
      {name: 'LENOVO THINKPAD', description: 'The ThinkPad X1 Carbon is a high-end notebook computer released by Lenovo in 2012', img:'lt_lenovo.png'},
    ]
  }

  ngOnInit() {
  }

}
