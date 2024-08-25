import { Component, effect, Input, signal, Signal } from "@angular/core";
import { Car } from "../../types/car.interface";
import { CommonModule } from "@angular/common";
import { Observable } from "rxjs";
import { CarsService } from "../../services/cars.service";
import { CAR_DATA } from "../../data/cars.data";
import { FilterBrandPipe } from "../../pipes/filter-brand.pipe";

@Component({
  selector: "app-car-list",
  standalone: true,
  imports: [CommonModule, FilterBrandPipe],
  templateUrl: "./car-list.component.html",
  styleUrl: "./car-list.component.css",
})
export class CarListComponent {
  cars = signal<Car[]>([]);
  searchValue = signal("");

  constructor(public carsService: CarsService) {}

  ngOnInit() {
    this.carsService.getCars().subscribe(cars => {
      this.cars.set(cars);
    });
  }

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    // console.log(value);
    this.searchValue.set(value);
  }
}
