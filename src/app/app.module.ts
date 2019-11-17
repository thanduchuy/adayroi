import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HeaderComponent } from "./layouts/header/header.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatSelectModule } from "@angular/material/select";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import * as firebase from "firebase/app";
import { FooterComponent } from "./layouts/footer/footer.component";
@NgModule({
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSelectModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    const firebaseConfig = {
      apiKey: "AIzaSyBSECZc_md1N5CORnWs8EwlgTelC9qoc2s",
      authDomain: "adayroi-c46ab.firebaseapp.com",
      databaseURL: "https://adayroi-c46ab.firebaseio.com",
      projectId: "adayroi-c46ab",
      storageBucket: "adayroi-c46ab.appspot.com",
      messagingSenderId: "425387094490",
      appId: "1:425387094490:web:0874454831fe8acb0310e3",
      measurementId: "G-FN8917GCEY"
    };
    firebase.initializeApp(firebaseConfig);
  }
}
