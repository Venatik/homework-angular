import { Component, Input } from "@angular/core";
import { Car } from "../../types/car.interface";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-car-list",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./car-list.component.html",
  styleUrl: "./car-list.component.css",
})
export class CarListComponent {
  @Input() cars: Car[] = [];
}
