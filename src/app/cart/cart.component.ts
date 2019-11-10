import {Component, OnInit} from '@angular/core';
import {ProductsService} from '../products.service';
import {Product} from '../Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  products: Product[];

  constructor(
    private data: ProductsService
  ) {
  }

  ngOnInit() {

  }

}
