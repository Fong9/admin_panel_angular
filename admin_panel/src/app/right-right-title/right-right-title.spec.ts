import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightRightTitle } from './right-right-title';

describe('RightRightTitle', () => {
  let component: RightRightTitle;
  let fixture: ComponentFixture<RightRightTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightRightTitle],
    }).compileComponents();

    fixture = TestBed.createComponent(RightRightTitle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
