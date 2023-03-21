export const SIDENAV_MENU = [
  {
    id: 1,
    label: '대시보드',
    icon: 'dashboard',
  },
  {
    id: 2,
    label: '업무요청',
    icon: 'work',
  },
  {
    id: 3,
    label: '문서발급',
    icon: 'article',
  },
  {
    id: 4,
    label: '매입매출',
    icon: 'auto_graph',
    subs: [
      {
        id: 40,
        label: '세금계산서',
      },
      {
        id: 41,
        label: '현금영수증',
      },
      {
        id: 42,
        label: '간이영수증',
      },
      {
        id: 43,
        label: '사업용 신용카드',
      },
      {
        id: 44,
        label: '신용카드 매출',
      },
      {
        id: 45,
        label: '결제대행 매출',
      },
      {
        id: 46,
        label: '거래처',
      },
    ],
  },
  {
    id: 5,
    label: '자금관리',
    icon: 'savings',
    subs: [
      {
        id: 50,
        label: '미수금',
      },
      {
        id: 51,
        label: '미지급금',
      },
      {
        id: 52,
        label: '은행 입출금 내역',
      },
    ],
  },
  {
    id: 6,
    label: '급여관리',
    icon: 'account_balance_wallet',
    subs: [
      {
        id: 60,
        label: '지급대상자',
      },
      {
        id: 61,
        label: '급여입력',
      },
      {
        id: 62,
        label: '간편급여이체',
        icon: 'http://wiki.hash.kr/images/d/d7/%ED%95%98%EB%82%98%EC%9D%80%ED%96%89_%EB%A1%9C%EA%B3%A0.png',
      },
      {
        id: 63,
        label: '급여대장',
      },
      {
        id: 64,
        label: '급여명세서',
      },
    ],
  },
  {
    id: 7,
    label: '세금과공과',
    icon: 'receipt_long',
    subs: [
      {
        id: 70,
        label: '영업손익',
      },
      {
        id: 71,
        label: '부가가치세',
      },
      {
        id: 72,
        label: '사회보험료',
      },
    ],
  },
  {
    id: 8,
    label: '설정',
    icon: 'settings',
    subs: [
      {
        id: 80,
        label: '회사정보',
      },
      {
        id: 81,
        label: '데이터 연동',
      },
    ],
  },
];
