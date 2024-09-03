import { Component, input } from "@angular/core";
import { CarComponent } from "../car/car.component";
import { MatGridListModule } from "@angular/material/grid-list";
import { Car } from "../../types/car.interface";

@Component({
  selector: "app-cars",
  standalone: true,
  imports: [CarComponent, MatGridListModule],
  templateUrl: "./cars.component.html",
  styleUrl: "./cars.component.css",
})
export class CarsComponent {
  cars = input<Car[]>([]);
  breakpoint: number = 0;

  ngOnInit() {
    this.calculateBreakpoint();
  }

  calculateBreakpoint(innerWidth: number = window.innerWidth) {
    if (innerWidth <= 480) {
      this.breakpoint = 1;
    } else if (innerWidth <= 768) {
      this.breakpoint = 2;
    } else if (innerWidth <= 1024) {
      this.breakpoint = 3;
    } else if (innerWidth <= 1200) {
      this.breakpoint = 4;
    } else {
      this.breakpoint = 5;
    }
  }

  onResize(event: any) {
    this.calculateBreakpoint(event.target.innerWidth);
  }
}
