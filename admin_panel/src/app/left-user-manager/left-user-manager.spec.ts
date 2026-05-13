import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftUserManager } from './left-user-manager';

describe('LeftUserManager', () => {
  let component: LeftUserManager;
  let fixture: ComponentFixture<LeftUserManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftUserManager],
    }).compileComponents();

    fixture = TestBed.createComponent(LeftUserManager);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
