import { Component } from '@angular/core';
import { RightRightTitle } from '../right-right-title/right-right-title';
import { RightToolBar } from '../right-tool-bar/right-tool-bar';
import { RightPagination } from '../right-pagination/right-pagination';
import { RightProductsListing } from '../right-products-listing/right-products-listing';

@Component({
  selector: 'app-right',
  imports: [RightRightTitle, RightToolBar, RightPagination, RightProductsListing],
  templateUrl: './right.html',
  styleUrl: './right.css',
})
export class Right {}
