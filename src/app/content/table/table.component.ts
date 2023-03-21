import { Component } from '@angular/core';

export interface PeriodicElement {
  date: string;
  transaction: string;
  taxType: string;
  name: string;
  businessNum: string;
  supply: number;
  vat: number;
  sum: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    date: '2022-06-30',
    transaction: '매입',
    taxType: '과세',
    name: '인포레이션 주식회사',
    businessNum: '390-88-01271',
    supply: 2500000,
    vat: 250000,
    sum: 2750000,
  },
  {
    date: '2022-06-10',
    transaction: '매출',
    taxType: '면세',
    name: '네이버 주식회사',
    businessNum: '390-18-01271',
    supply: 10000000000,
    vat: 0,
    sum: 10000000000,
  },
  {
    date: '2022-06-01',
    transaction: '매출',
    taxType: '영세',
    name: '카카오톡',
    businessNum: '420-12-00211',
    supply: 10000000000,
    vat: 0,
    sum: 10000000000,
  },
  {
    date: '2022-02-15',
    transaction: '매입',
    taxType: '과세',
    name: '어도비',
    businessNum: '390-21-01271',
    supply: 10000000000,
    vat: 250000,
    sum: 10000025000,
  },
  {
    date: '2022-02-14',
    transaction: '매출',
    taxType: '과세',
    name: 'JetBrains',
    businessNum: '390-18-01271',
    supply: 2500000,
    vat: 250000,
    sum: 2750000,
  },
  {
    date: '2022-02-13',
    transaction: '매출',
    taxType: '과세',
    name: '아마존 웹 서비스',
    businessNum: '390-88-04271',
    supply: 2500000,
    vat: 250000,
    sum: 2750000,
  },
  {
    date: '2022-02-12',
    transaction: '매출',
    taxType: '과세',
    name: '구글 코리아',
    businessNum: '390-18-01271',
    supply: 2500000,
    vat: 250000,
    sum: 2750000,
  },
  {
    date: '2022-02-12',
    transaction: '매출',
    taxType: '과세',
    name: '주식회사 케이티',
    businessNum: '390-88-61271',
    supply: 2500000,
    vat: 250000,
    sum: 2750000,
  },
  {
    date: '2022-02-11',
    transaction: '매출',
    taxType: '과세',
    name: '하나은행',
    businessNum: '390-88-01171',
    supply: 2500000,
    vat: 250000,
    sum: 2750000,
  },
  {
    date: '2022-02-01',
    transaction: '매출',
    taxType: '과세',
    name: '만수르',
    businessNum: '390-18-01271',
    supply: 2500000,
    vat: 250000,
    sum: 2750000,
  },
];

@Component({
  selector: 'app-content-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  displayedColumns: string[] = [
    'date',
    'transaction',
    'taxType',
    'name',
    'businessNum',
    'supply',
    'vat',
    'sum',
  ];
  dataSource = ELEMENT_DATA;
}
