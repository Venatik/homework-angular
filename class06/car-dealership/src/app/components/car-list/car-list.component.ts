import { Component, effect, Input, signal, Signal } from "@angular/core";
import { Car } from "../../types/car.interface";
import { CommonModule } from "@angular/common";
import { Observable } from "rxjs";
import { CarsService } from "../../services/cars.service";
import { CAR_DATA } from "../../data/cars.data";
import { FilterBrandPipe } from "../../pipes/filter-brand.pipe";
import { FilterCarsPipe } from "../../pipes/filter-cars.pipe";

@Component({
  selector: "app-car-list",
  standalone: true,
  imports: [CommonModule, FilterBrandPipe, FilterCarsPipe],
  templateUrl: "./car-list.component.html",
  styleUrl: "./car-list.component.css",
})
export class CarListComponent {
  cars = signal<Car[]>([]);
  searchValue = signal("");
  fromPrice = signal<number | null>(null);
  toPrice = signal<number | null>(null);

  constructor(public carsService: CarsService) {}

  ngOnInit() {
    this.carsService.getCars().subscribe(cars => {
      this.cars.set(cars);
    });
  }

  onInputChange(event: Event, field: "brand" | "fromPrice" | "toPrice") {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    switch (field) {
      case "brand":
        this.searchValue.set(value);
        break;
      case "fromPrice":
        this.fromPrice.set(value ? Number(value) : null);
        break;
      case "toPrice":
        this.toPrice.set(value ? Number(value) : null);
        break;
    }
  }
}
