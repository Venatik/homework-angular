import { Injectable } from "@angular/core";
import { environment } from "../environment";
import { HttpClient } from "@angular/common/http";
import { catchError, Observable, of } from "rxjs";
import { Car } from "../types/car.interface";
import { Response } from "../types/response.interface";

@Injectable({
  providedIn: "root",
})
export class CarService {
  private carPath = `${environment.apiUrl}/api/cars`;

  constructor(private readonly http: HttpClient) {}

  getCars(): Observable<Response<Car[]>> {
    return this.http.get<Response<Car[]>>(this.carPath).pipe(
      catchError(error => {
        console.log("An error occurred:", error);
        return of({ payload: [], total: 0 });
      })
    );
  }
}
