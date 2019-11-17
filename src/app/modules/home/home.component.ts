import { Component, OnInit } from "@angular/core";
import { ImageService } from "src/app/shared/services/image.service";
import { ProductService } from "src/app/shared/services/product.service";
import { Product } from "src/app/shared/models/product.model";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  milks: Product[] = [];
  constructor(private img: ImageService, private product: ProductService) {}
  dataMilks: {};
  dataRoot: any[] = [];
  keyMilks: {};
  index = 0;
  imgs = [
    "/assets/img/27004929245214.jpg",
    "/assets/img/27004929310750.jpg",
    "/assets/img/27004929376286.jpg",
    "/assets/img/27004929441822.jpg",
    "/assets/img/27004931407902.jpg",
    "/assets/img/27004930949150.jpg"
  ];
  collections = [
    "product",
    "product-drinks",
    "product-cake",
    "product-freshfood",
    "product-mom",
    "product-kitchen"
  ];
  ngOnInit() {
    this.collections.forEach((member) => {
      this.getData(member);
    });
  }
  getData(name) {
    this.product.getDataProduct(name).then((data) => {
      this.milks = data.docs.map((element) => {
        let temp: Product = new Product(element.data());
        this.img.downloadFile(temp.img).then((data) => {
          temp.img = data;
        });
        this.img.downloadFile(temp.img_hover).then((data) => {
          temp.img_hover = data;
        });
        return temp;
      });
      this.dataMilks = this.splitData(this.milks);
      this.dataRoot.push({
        img: this.imgs[this.index],
        key: Object.keys(this.dataMilks),
        data: this.splitData(this.milks)
      });
      this.index++;
      this.milks = [];
    });
  }
  splitData(milks: Product[]) {
    return milks.reduce((result, member) => {
      member.category in result
        ? result[member.category].push(member)
        : (result[member.category] = [member]);
      return result;
    }, {});
  }
}
