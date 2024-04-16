import {Component, Input} from '@angular/core';
import {SvgIconComponent} from "angular-svg-icon";

@Component({
  selector: 'app-svg-icon',
  standalone: true,
  imports: [
    SvgIconComponent
  ],
  templateUrl: './app-svg-icon.component.html',
  styleUrl: './app-svg-icon.component.scss'
})
export class AppSvgIconComponent {

  @Input() src!: string;
  @Input() stretch: boolean = false;
  @Input() size: number = 24;
  @Input() svgStyle: { [key: string]: any } = {};


  getStyle() {
    return {...this.svgStyle, 'width.px': this.size, 'height.px': this.size};
  }
}
