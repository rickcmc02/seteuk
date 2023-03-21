import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxBillComponent } from './tax-bill.component';

describe('TaxBillComponent', () => {
  let component: TaxBillComponent;
  let fixture: ComponentFixture<TaxBillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxBillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaxBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
