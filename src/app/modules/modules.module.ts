import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home/home.component";
import { ModulesRoutingModule } from "./modules-routing.module";
import { MatTabsModule } from "@angular/material/tabs";
import { ProductComponent } from "./home/product/product.component";
import { LogInComponent } from "./log-in/log-in.component";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
  declarations: [HomeComponent, ProductComponent, LogInComponent],
  imports: [
    CommonModule,
    ModulesRoutingModule,
    MatTabsModule,
    MatCheckboxModule
  ],
  exports: [ProductComponent]
})
export class ModulesModule {}
