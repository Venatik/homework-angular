import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Car } from "../types/car.interface";

@Injectable({
  providedIn: "root",
})
export class CarsService {
  private _carsSubject = new BehaviorSubject<Car[]>([]);
  cars$ = this._carsSubject.asObservable();

  setCars(cars: Car[]) {
    this._carsSubject.next(cars);
  }

  getCars(): Observable<Car[]> {
    return this.cars$;
  }

  addCar(car: Car) {
    const currentCars = this._carsSubject.getValue();

    this._carsSubject.next([...currentCars, car]);
  }

  removeCar(id: string) {
    const currentCars = this._carsSubject.getValue();

    const updatedCars = currentCars.filter(car => car.id !== id);

    this._carsSubject.next(updatedCars);
  }

  constructor() {}
}
