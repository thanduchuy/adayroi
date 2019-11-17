import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.scss"]
})
export class ProductComponent implements OnInit {
  @Input() name: string;
  @Input() discount: number;
  @Input() img: string;
  @Input() img_hover: string;
  @Input() price_new: number;
  @Input() price_old: number;
  @Input() vinid: number;
  @Input() rate: number;
  @Input() imgRoot: string;
  constructor() {}
  ngOnInit() {}
  changeImage() {
    this.imgRoot = this.img_hover;
  }
  resetImage() {
    this.imgRoot = this.img;
  }
}
