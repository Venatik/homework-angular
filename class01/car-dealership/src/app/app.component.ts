import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { DealershipInfoComponent } from "./components/dealership-info/dealership-info.component";
import { CarListComponent } from "./components/car-list/car-list.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavigationComponent,
    DealershipInfoComponent,
    CarListComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  description = "Venatik's Premium Car Dealership";
  founded = 2023;
  title = "car-dealership";
}
