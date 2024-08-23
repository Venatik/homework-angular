import { Component } from "@angular/core";
import { DealershipInfoComponent } from "../dealership-info/dealership-info.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [DealershipInfoComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  description = "Venatik's Premium Car Dealership";
  founded = 2023;
}
