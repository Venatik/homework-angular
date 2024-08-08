import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HeaderComponent } from "./components/header/header.component";
import { NavigationComponent } from "./components/navigation/navigation.component";
import { DealershipInfoComponent } from "./components/dealership-info/dealership-info.component";
import { CarListComponent } from "./components/car-list/car-list.component";
import { CreateCarComponent } from "./components/create-car/create-car.component";
import { Car } from "./types/car.interface";
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
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  description = "Venatik's Premium Car Dealership";
  founded = 2023;
  title = "car-dealership";

  cars: Car[] = [
    {
      id: "1",
      description: "Luxury sedan in excellent condition",
      price: 45000,
      brand: "BMW",
      model: "5 Series",
    },
    {
      id: "2",
      description: "Sporty coupe with low mileage",
      price: 55000,
      brand: "Audi",
      model: "A5",
    },
    {
      id: "3",
      description: "Eco-friendly electric SUV",
      price: 65000,
      brand: "Tesla",
      model: "Model Y",
    },
  ];

  addCar(newCar: Car) {
    this.cars.push(newCar);
  }
}
