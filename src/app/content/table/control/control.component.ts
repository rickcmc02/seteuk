import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

const selects = [
  {
    id: 'transaction',
    label: '거래구분',
    options: [
      {
        value: 'all',
        label: '전체',
      },
      {
        value: 'sale',
        label: '매출',
      },
      {
        value: 'purchase',
        label: '매입',
      },
    ],
  },
  {
    id: 'tax',
    label: '과세구분',
    options: [
      {
        value: 'all',
        label: '전체',
      },
      {
        value: 'free',
        label: '면세',
      },
      {
        value: 'zero',
        label: '영세',
      },
    ],
  },
  {
    id: 'quarter',
    label: '분기검색',
    options: [
      {
        value: '22_1',
        label: '2022년 1분기',
      },
      {
        value: '22_2',
        label: '2022년 2분기',
      },
      {
        value: '22_3',
        label: '2022년 3분기',
      },
      {
        value: '22_4',
        label: '2022년 4분기',
      },
    ],
  },
];

@Component({
  selector: 'app-table-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss'],
})
export class ControlComponent {
  // selects = selects;
  // selectedTransaction: String = this.selects[0].options[0].value;
  // selectedTax: String = this.selects[1].options[0].value;
  // selectedQuarter: String = this.selects[2].options[0].value;

  range = new FormGroup({
    // start: new FormControl<Date | null>(null),
    // end: new FormControl<Date | null>(null),
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });
}
