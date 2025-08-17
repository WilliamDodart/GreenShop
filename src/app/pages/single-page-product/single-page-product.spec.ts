import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePageProduct } from './single-page-product';

describe('SinglePageProduct', () => {
  let component: SinglePageProduct;
  let fixture: ComponentFixture<SinglePageProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SinglePageProduct]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePageProduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
