// 0324 1 draft reported.
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'seteuk';
  pageId = 41;

  onChangePage(id: number) {
    this.pageId = id;
  }
}
