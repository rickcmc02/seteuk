import { Component, Input } from '@angular/core';
import { SIDENAV_MENU } from 'src/app/sidenav/sidenav.data';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  SIDENAV_MENU = SIDENAV_MENU;
}
