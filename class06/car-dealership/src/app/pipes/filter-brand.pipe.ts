import { Pipe, PipeTransform } from "@angular/core";
import { Car } from "../types/car.interface";

@Pipe({
  name: "filterBrand",
  standalone: true,
})
export class FilterBrandPipe implements PipeTransform {
  transform(cars: Car[], searchValue: string): Car[] {
    if (!cars || !searchValue) {
      return cars;
    }

    searchValue = searchValue.toLowerCase();
    return cars.filter(car => car.brand.toLowerCase().includes(searchValue));
  }
}
