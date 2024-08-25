import { Pipe, PipeTransform } from "@angular/core";
import { Car } from "../types/car.interface";

@Pipe({
  name: "filterCars",
  standalone: true,
})
export class FilterCarsPipe implements PipeTransform {
  transform(
    cars: Car[],
    brand: string,
    fromPrice: number | null,
    toPrice: number | null
  ): Car[] {
    if (!cars) return [];

    return cars.filter(car => {
      const matchesBrand =
        !brand || car.brand.toLowerCase().includes(brand.toLowerCase());
      const matchesFromPrice = fromPrice === null || car.price >= fromPrice;
      const matchesToPrice = toPrice === null || car.price <= toPrice;

      return matchesBrand && matchesFromPrice && matchesToPrice;
    });
  }
}
