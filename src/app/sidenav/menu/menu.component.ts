import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() name = '';
  @Input() icon = '';
  @Input() subs?: { id: number; label: string; icon?: string }[] = [];
  isOpen = true;

  onToggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
