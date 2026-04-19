import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeldProducts } from './veld-products';

describe('VeldProducts', () => {
  let component: VeldProducts;
  let fixture: ComponentFixture<VeldProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VeldProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VeldProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
