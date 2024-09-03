import { Component } from "@angular/core";
import { NavbarComponent } from "../navbar/navbar.component";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [NavbarComponent, MatIconModule, RouterLink],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.css",
})
export class HeaderComponent {}
