import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightToolBar } from './right-tool-bar';

describe('RightToolBar', () => {
  let component: RightToolBar;
  let fixture: ComponentFixture<RightToolBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightToolBar],
    }).compileComponents();

    fixture = TestBed.createComponent(RightToolBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
