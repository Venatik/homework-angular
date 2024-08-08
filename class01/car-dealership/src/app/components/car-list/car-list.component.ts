import { Component } from "@angular/core";
import { Car } from "../../types/car.interface";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-car-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./car-list.component.html",
  styleUrl: "./car-list.component.css",
})
export class CarListComponent {
  cars: Car[] = [
    {
      id: "1",
      description: "Luxury sedan in excellent condition",
      price: 45000,
      images: [
        "https://www.bmw.co.uk/content/dam/bmw/common/all-models/5-series/sedan/2023/5-series-sedan-phev.png",
      ],
      type: "Sedan",
      year: 2022,
      color: "Black",
      fuelType: "Petrol",
      distance: 15000,
      isNew: false,
      location: { city: "Skopje", country: "Macedonia" },
      brand: "BMW",
      model: "5 Series",
      enginePower: 200,
      doors: 4,
      seats: 5,
      transmission: "Automatic",
    },
    {
      id: "2",
      description: "Sporty coupe with low mileage",
      price: 55000,
      images: [
        "https://www.topgear.com/sites/default/files/2021/08/1671-AUDIA5COUPE018.jpg",
      ],
      type: "Coupe",
      year: 2023,
      color: "Red",
      fuelType: "Petrol",
      distance: 5000,
      isNew: true,
      location: { city: "Skopje", country: "Macedonia" },
      brand: "Audi",
      model: "A5",
      enginePower: 180,
      doors: 2,
      seats: 4,
      transmission: "Automatic",
    },
    {
      id: "3",
      description: "Eco-friendly electric SUV",
      price: 65000,
      images: [
        "https://www.topgear.com/sites/default/files/2022/03/TopGear%20-%20Tesla%20Model%20Y%20-%20003.jpg",
      ],
      type: "SUV",
      year: 2023,
      color: "White",
      fuelType: "Electric",
      distance: 1000,
      isNew: true,
      location: { city: "Ohrid", country: "Macedonia" },
      brand: "Tesla",
      model: "Model Y",
      enginePower: 250,
      doors: 5,
      seats: 7,
      transmission: "Automatic",
    },
  ];
}
