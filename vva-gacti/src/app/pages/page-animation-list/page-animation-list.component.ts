import { Component } from '@angular/core';
import { Animations } from 'src/app/mock/animations';

@Component({
  selector: 'app-page-animation-list',
  templateUrl: './page-animation-list.component.html',
  styleUrls: ['./page-animation-list.component.scss']
})
export class PageAnimationListComponent {
  animations = Animations
}
