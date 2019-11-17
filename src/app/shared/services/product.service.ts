import { Injectable } from "@angular/core";
import * as firebase from "firebase";
@Injectable({
  providedIn: "root"
})
export class ProductService {
  db = firebase.firestore();
  constructor() {}
  getDataProduct(name: string) {
    return this.db.collection(name).get();
  }
  addDataProduct(data) {
    return this.db.collection("product-kitchen").add(data);
  }
}
