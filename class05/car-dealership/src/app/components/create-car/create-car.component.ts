import { Component, Output, EventEmitter } from "@angular/core";
import { Car } from "../../types/car.interface";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { CarsService } from "../../services/cars.service";

@Component({
  selector: "app-create-car",
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: "./create-car.component.html",
  styleUrl: "./create-car.component.css",
})
export class CreateCarComponent {
  brand: string = "";
  model: string = "";
  description: string = "";
  price: number = 0;
  imageUrl: string = "";

  constructor(private carsService: CarsService) {}

  clearInputs() {
    this.brand = "";
    this.model = "";
    this.description = "";
    this.price = 0;
    this.imageUrl = "";
  }

  handleSubmit() {
    this.carsService.addCar({
      id: Date.now().toString(),
      brand: this.brand,
      model: this.model,
      description: this.description,
      price: this.price,
      imageUrl: this.imageUrl,
    });

    this.clearInputs();
  }
}
