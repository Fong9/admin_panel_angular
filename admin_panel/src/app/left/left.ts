import { Component } from '@angular/core';
import { LeftCategoryManager } from '../left-category-manager/left-category-manager';
import { LeftNav } from '../left-nav/left-nav';
import { LeftProductManager } from '../left-product-manager/left-product-manager';
import { LeftUserManager } from '../left-user-manager/left-user-manager';

@Component({
  selector: 'app-left',
  imports: [LeftNav, LeftCategoryManager, LeftProductManager, LeftUserManager],
  templateUrl: './left.html',
  styleUrl: './left.css',
})
export class Left {}
