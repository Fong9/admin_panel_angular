import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightPagination } from './right-pagination';

describe('RightPagination', () => {
  let component: RightPagination;
  let fixture: ComponentFixture<RightPagination>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightPagination],
    }).compileComponents();

    fixture = TestBed.createComponent(RightPagination);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
