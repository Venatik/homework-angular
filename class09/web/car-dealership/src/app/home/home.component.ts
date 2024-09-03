import { Component, signal } from "@angular/core";
import { CarsComponent } from "../cars/cars.component";
import { AsyncPipe } from "@angular/common";
import { MatPaginatorModule, PageEvent } from "@angular/material/paginator";
import { finalize, map, Observable, tap } from "rxjs";
import { CarService } from "../../services/car.service";
import { Car } from "../../types/car.interface";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [CarsComponent, MatPaginatorModule, AsyncPipe],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  cars: Observable<Car[]> = new Observable<Car[]>();

  isLoading = signal<boolean>(true);

  total = signal(30);
  pageSize = signal(10);
  page = signal(0);

  constructor(private readonly carService: CarService) {}

  ngOnInit() {
    this.getCars();
  }

  getCars() {
    this.isLoading.set(true);
    this.cars = this.carService.getCars(this.page(), this.pageSize()).pipe(
      tap(response => this.total.set(response.total)),
      map(response => response.payload),
      finalize(() => this.isLoading.set(false))
    );
  }

  onPageChange(event: PageEvent) {
    this.pageSize.set(event.pageSize);
    this.page.set(event.pageIndex);
    this.getCars();
  }
}
