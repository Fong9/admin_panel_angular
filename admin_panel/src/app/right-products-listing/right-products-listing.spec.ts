import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightProductsListing } from './right-products-listing';

describe('RightProductsListing', () => {
  let component: RightProductsListing;
  let fixture: ComponentFixture<RightProductsListing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightProductsListing],
    }).compileComponents();

    fixture = TestBed.createComponent(RightProductsListing);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
