import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftCategoryManager } from './left-category-manager';

describe('LeftCategoryManager', () => {
  let component: LeftCategoryManager;
  let fixture: ComponentFixture<LeftCategoryManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftCategoryManager],
    }).compileComponents();

    fixture = TestBed.createComponent(LeftCategoryManager);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
