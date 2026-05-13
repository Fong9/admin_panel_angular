import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftProductManager } from './left-product-manager';

describe('LeftProductManager', () => {
  let component: LeftProductManager;
  let fixture: ComponentFixture<LeftProductManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftProductManager],
    }).compileComponents();

    fixture = TestBed.createComponent(LeftProductManager);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
