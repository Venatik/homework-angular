import { Component, Output, EventEmitter } from "@angular/core";
import { Car } from "../../types/car.interface";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-create-car",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./create-car.component.html",
  styleUrl: "./create-car.component.css",
})
export class CreateCarComponent {
  @Output() carCreated = new EventEmitter<Car>();

  newCar: Car = {
    id: "",
    description: "",
    price: 0,
    brand: "",
    model: "",
  };

  createCar(description: string, price: string, brand: string, model: string) {
    const newCar: Car = {
      id: Date.now().toString(),
      description: description,
      price: Number(price),
      brand: brand,
      model: model,
    };

    this.carCreated.emit(newCar);
  }
}
