import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-sidenav-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
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

  @ViewChild(MatAccordion) accordion!: MatAccordion;
}
