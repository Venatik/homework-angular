import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { CarListComponent } from "./components/car-list/car-list.component";
import { CreateCarComponent } from "./components/create-car/create-car.component";

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "cars", component: CarListComponent },
  { path: "create-car", component: CreateCarComponent },
];
