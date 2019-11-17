export class Product {
  category: string;
  discount: number;
  img: string;
  img_hover: string;
  name: string;
  price_new: number;
  price_old: number;
  vinid: number;
  rate: number;
  constructor(o: Object) {
    this.discount = o["discount"];
    this.img = o["img"];
    this.img_hover = o["img_hover"];
    this.name = o["name"];
    this.price_new = o["price_new"];
    this.price_old = o["price_old"];
    this.vinid = o["vinid"];
    this.rate = o["rate"];
    this.category = o["category"];
  }
}
