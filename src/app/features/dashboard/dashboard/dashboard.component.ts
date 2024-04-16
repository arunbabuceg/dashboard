import { Component } from '@angular/core';
import {TopNavComponent} from "../../../top-nav/top-nav.component";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TopNavComponent,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
