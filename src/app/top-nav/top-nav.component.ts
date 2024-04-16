import { Component } from '@angular/core';
import {AppSvgIconComponent} from "../shared/app-svg-icon/app-svg-icon.component";

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [
    AppSvgIconComponent
  ],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.scss'
})
export class TopNavComponent {

}
