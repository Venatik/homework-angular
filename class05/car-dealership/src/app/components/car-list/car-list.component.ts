import { Component, Input, Signal } from "@angular/core";
import { Car } from "../../types/car.interface";
import { CommonModule } from "@angular/common";
import { Observable } from "rxjs";
import { CarsService } from "../../services/cars.service";
import { CAR_DATA } from "../../data/cars.data";

@Component({
  selector: "app-car-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./car-list.component.html",
  styleUrl: "./car-list.component.css",
})
export class CarListComponent {
  cars: Car[] = [];

  constructor(public carsService: CarsService) {}

  ngOnInit() {
    this.carsService.getCars().subscribe(cars => {
      this.cars = cars;
    });
  }
}
