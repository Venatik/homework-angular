import { Injectable } from "@angular/core";
import { environment } from "../environment";
import { HttpClient, HttpParams } from "@angular/common/http";
import { catchError, Observable, of } from "rxjs";
import { Car } from "../types/car.interface";
import { Response } from "../types/response.interface";

@Injectable({
  providedIn: "root",
})
export class CarService {
  private carPath = `${environment.apiUrl}/api/cars`;

  constructor(private readonly http: HttpClient) {}

  getCars(
    page: number,
    pageSize: number
  ): Observable<{ total: number; payload: Car[] }> {
    const params = new HttpParams()
      .set("page", page.toString())
      .set("pageSize", pageSize.toString());

    return this.http.get<{ total: number; payload: Car[] }>(`${this.carPath}`, {
      params,
    });
  }
}
