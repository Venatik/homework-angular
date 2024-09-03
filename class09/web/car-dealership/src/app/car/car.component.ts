import { Component, computed, input, signal } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatChipsModule } from "@angular/material/chips";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { Car } from "../../types/car.interface";
import { environment } from "../../environment";
import { CurrencyPipe, NgFor } from "@angular/common";
import { MatAccordion, MatExpansionModule } from "@angular/material/expansion";

@Component({
  selector: "app-car",
  standalone: true,
  imports: [
    MatIconModule,
    MatBadgeModule,
    MatTooltipModule,
    MatChipsModule,
    MatButtonModule,
    MatCardModule,
    CurrencyPipe,
    MatAccordion,
    MatExpansionModule,
  ],
  templateUrl: "./car.component.html",
  styleUrl: "./car.component.css",
})
export class CarComponent {
  car = input.required<Car>();

  getImageUrl(): string {
    const imagePath = this.car().images[0];

    const cleanImagePath = imagePath
      .replace(/^\.\//, "")
      .replace(/^(car-images|car_images)\//, "");

    return `${environment.apiUrl}/car_images/${cleanImagePath}`;
  }

  readonly panelOpenState = signal(false);

  openPanel(isOpen: boolean) {
    this.panelOpenState.set(isOpen);
  }
}
