import { Component } from '@angular/core';
import {TopNavComponent} from "../../../top-nav/top-nav.component";
import {RouterLink, RouterOutlet} from "@angular/router";
import {AppSvgIconComponent} from "../../../shared/app-svg-icon/app-svg-icon.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    TopNavComponent,
    RouterLink,
    RouterOutlet,
    AppSvgIconComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
