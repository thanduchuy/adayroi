import { Component, OnInit, OnChanges } from "@angular/core";
import { City } from "src/app/shared/models/city.models";
import { LocalService } from "src/app/shared/services/local.service";
import { Distinct } from "src/app/shared/models/distinct.model";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Classify } from "src/app/shared/models/classify.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  local = "Phường Hoà Hiệp Bắc, Quận Liên Chiểu, Đà Nẵng";
  datacitys: City[];
  dataDistict: Distinct[];
  dataWard: Distinct[];
  formGroup: FormGroup;
  imgs = [
    "/assets/img/company/vinschool.png",
    "/assets/img/company/vinmec.png",
    "/assets/img/company/almaz.png",
    "/assets/img/company/quythientam.png",
    "/assets/img/company/vincom.png",
    "/assets/img/company/vincommerce.png",
    "/assets/img/company/vinfast.png",
    "/assets/img/company/vineco.png",
    "/assets/img/company/vinhomes.png",
    "/assets/img/company/vincity.png",
    "/assets/img/company/vingroupcard.png",
    "/assets/img/company/vinmart.png"
  ];
  classify: Classify[];
  hidden: boolean = true;
  constructor(
    private fb: FormBuilder,
    private location: LocalService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    this.formGroup = this.fb.group({
      city: ["Tỉnh/Thành Phố", [Validators.required]],
      distict: ["Quận/Huyện", [Validators.required]],
      ward: ["Phường", [Validators.required]]
    });
    this.location.getAllCity().subscribe((data) => {
      this.datacitys = Object.values(data);
    });
    this.location.getClassifys().subscribe((data) => {
      this.classify = data["data"];
    });
    this.router.events.subscribe((res) => {
      this.hidden = !this.router.url.includes("login");
    });
  }
  onChangeCity() {
    const cityName = this.formGroup.value["city"].split(",");
    this.location.getDistinctOfCity(cityName[0]).subscribe((data) => {
      this.dataDistict = Object.values(data);
    });
  }
  onChangeDistict() {
    const distict = this.formGroup.value["distict"].split(",");
    this.location.getWardOfDistinct(distict[0]).subscribe((data) => {
      this.dataWard = Object.values(data);
    });
  }
  onChangeLoction() {
    const { city, distict, ward } = this.formGroup.value;
    let cityn = city.split(",")[1];
    let distictn = distict.split(",")[1];
    this.local = `Phường ${ward},Quận ${distictn},${cityn}`;
  }
}
