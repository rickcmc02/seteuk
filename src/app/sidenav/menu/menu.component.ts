import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  @Input() id = 0;
  @Input() name = '';
  @Input() icon = '';
  @Input() subs?: { id: number; label: string; icon?: string }[] = [];
  isOpen = true;

  onChangeSelect(id: number) {
    window.location.href = id.toString();
  }

  onChangePage(id: number) {
    this.onChangeSelect(id);
    let strId: string = `/${id}`;
    history.pushState({}, '', strId);
  }

  onToggleMenu() {
    this.isOpen = !this.isOpen;
  }
}
