import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchantTableComponent } from './merchant-table.component';

describe('MerchantTableComponent', () => {
  let component: MerchantTableComponent;
  let fixture: ComponentFixture<MerchantTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MerchantTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MerchantTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
