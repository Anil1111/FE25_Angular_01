import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ng-for",
  templateUrl: "./ng-for.component.html",
  styleUrls: ["./ng-for.component.scss"]
})
export class NgForComponent implements OnInit {
  danhsachnhanvien: any = [
    {ten: 'nguyen' , tuoi: 18},
    {ten: 'thai' , tuoi: 19},
    {ten: 'sinh vien' , tuoi: 18},
    {ten: 'hoc sinh' , tuoi: 16},
  ];

  constructor() {}

  ngOnInit() {}
}
