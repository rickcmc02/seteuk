import { Component } from '@angular/core';

export interface PeriodicElement {
  date: string;
  transaction: string;
  taxType: string;
  name: string;
  businessNum: string;
  supply: number;
  vat: number;
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
  },
  {
    date: '2022-06-10',
    transaction: '매출',
    taxType: '면세',
    name: '네이버 주식회사',
    businessNum: '390-18-01271',
    supply: 10000000000,
    vat: 0,
  },
  {
    date: '2022-06-01',
    transaction: '매출',
    taxType: '영세',
    name: '카카오톡',
    businessNum: '420-12-00211',
    supply: 10000000000,
    vat: 0,
  },
  {
    date: '2022-02-15',
    transaction: '매입',
    taxType: '과세',
    name: '어도비',
    businessNum: '390-21-01271',
    supply: 10000000000,
    vat: 250000,
  },
  {
    date: '2022-02-14',
    transaction: '매출',
    taxType: '과세',
    name: 'JetBrains',
    businessNum: '390-18-01271',
    supply: 2500000,
    vat: 250000,
  },
  {
    date: '2022-02-13',
    transaction: '매출',
    taxType: '과세',
    name: '아마존 웹 서비스',
    businessNum: '390-88-04271',
    supply: 2500000,
    vat: 250000,
  },
  {
    date: '2022-02-12',
    transaction: '매출',
    taxType: '과세',
    name: '구글 코리아',
    businessNum: '390-18-01271',
    supply: 2500000,
    vat: 250000,
  },
  {
    date: '2022-02-12',
    transaction: '매출',
    taxType: '과세',
    name: '주식회사 케이티',
    businessNum: '390-88-61271',
    supply: 2500000,
    vat: 250000,
  },
  {
    date: '2022-02-11',
    transaction: '매출',
    taxType: '과세',
    name: '하나은행',
    businessNum: '390-88-01171',
    supply: 2500000,
    vat: 250000,
  },
  {
    date: '2022-02-01',
    transaction: '매출',
    taxType: '과세',
    name: '만수르',
    businessNum: '390-18-01271',
    supply: 2500000,
    vat: 250000,
  },
  {
    date: '2021-06-30',
    transaction: '매입',
    taxType: '과세',
    name: '인포레이션 주식회사2',
    businessNum: '390-88-01272',
    supply: 250000,
    vat: 25000,
  },
  {
    date: '2021-06-10',
    transaction: '매출',
    taxType: '면세',
    name: '네이버 주식회사2',
    businessNum: '390-18-01272',
    supply: 1000000000,
    vat: 0,
  },
  {
    date: '2021-06-01',
    transaction: '매출',
    taxType: '영세',
    name: '카카오톡2',
    businessNum: '420-12-00212',
    supply: 1000000000,
    vat: 0,
  },
  {
    date: '2021-02-15',
    transaction: '매입',
    taxType: '과세',
    name: '어도비2',
    businessNum: '390-21-01272',
    supply: 1000000000,
    vat: 25000,
  },
  {
    date: '2021-02-14',
    transaction: '매출',
    taxType: '과세',
    name: 'JetBrains2',
    businessNum: '390-18-01272',
    supply: 250000,
    vat: 25000,
  },
  {
    date: '2021-02-13',
    transaction: '매출',
    taxType: '과세',
    name: '아마존 웹 서비스',
    businessNum: '390-88-04272',
    supply: 250000,
    vat: 25000,
  },
  {
    date: '2021-02-12',
    transaction: '매출',
    taxType: '과세',
    name: '구글 코리아2',
    businessNum: '390-18-01272',
    supply: 250000,
    vat: 25000,
  },
  {
    date: '2021-02-12',
    transaction: '매출',
    taxType: '과세',
    name: '주식회사 케이티2',
    businessNum: '390-88-61272',
    supply: 250000,
    vat: 25000,
  },
  {
    date: '2022-02-11',
    transaction: '매출',
    taxType: '과세',
    name: '하나은행',
    businessNum: '390-88-01171',
    supply: 2500000,
    vat: 250000,
  },
  {
    date: '2021-02-01',
    transaction: '매출',
    taxType: '과세',
    name: '만수르2',
    businessNum: '390-18-01272',
    supply: 250000,
    vat: 25000,
  },
  {
    date: '2020-06-30',
    transaction: '매입',
    taxType: '과세',
    name: '인포레이션 주식회사3',
    businessNum: '390-88-01273',
    supply: 25000,
    vat: 2500,
  },
  {
    date: '2020-06-10',
    transaction: '매출',
    taxType: '면세',
    name: '네이버 주식회사3',
    businessNum: '390-18-01273',
    supply: 100000000,
    vat: 0,
  },
];

@Component({
  selector: 'app-content-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  currentPage: number = 0;
  rowsPerPage: number = 10;
  startRow: number = this.currentPage * this.rowsPerPage;
  endRow: number = this.startRow + this.rowsPerPage;
  numOfPages: number = Math.ceil(ELEMENT_DATA.length / this.rowsPerPage);
  NOP_LIST: any[] = new Array(this.numOfPages);

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
  dataSource = ELEMENT_DATA.slice(this.startRow, this.endRow);

  amountConvertor(amount: Number): String {
    let convertedAmount: String = `${amount.toLocaleString()}원`;
    return convertedAmount;
  }

  onChangePage(index: number) {
    this.currentPage = index;
    this.startRow = this.currentPage * this.rowsPerPage;
    this.endRow = this.startRow + this.rowsPerPage;
    this.dataSource = ELEMENT_DATA.slice(this.startRow, this.endRow);
  }

  onMovePrev() {
    this.onChangePage(this.currentPage - 1);
  }
  onMoveNext() {
    this.onChangePage(this.currentPage + 1);
  }
  onChangeRowsPerPage(rows: any) {
    console.log(rows);
    this.rowsPerPage = rows;
    this.onChangePage(this.currentPage);
  }
}
