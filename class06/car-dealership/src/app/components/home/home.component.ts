import { Component } from "@angular/core";
import { DealershipInfoComponent } from "../dealership-info/dealership-info.component";
import { CarListComponent } from "../car-list/car-list.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [DealershipInfoComponent, CarListComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  description = "Venatik's Premium Car Dealership";
  founded = 2023;
}
