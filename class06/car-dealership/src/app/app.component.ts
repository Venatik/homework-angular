import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { DealershipInfoComponent } from "./components/dealership-info/dealership-info.component";
import { CarListComponent } from "./components/car-list/car-list.component";
import { CreateCarComponent } from "./components/create-car/create-car.component";
import { Car } from "./types/car.interface";
import { HomeComponent } from "./components/home/home.component";
import { CarsService } from "./services/cars.service";
import { CAR_DATA } from "./data/cars.data";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NavigationComponent,
    DealershipInfoComponent,
    CarListComponent,
    CreateCarComponent,
    HomeComponent,
    FormsModule,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  constructor(private carsService: CarsService) {}

  ngOnInit() {
    this.carsService.setCars(CAR_DATA);
  }
}
