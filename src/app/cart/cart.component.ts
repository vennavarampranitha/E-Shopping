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
  totalCost = 0;
  cartItems: { [upc: string]: Product } = {};

  constructor(
    private data: ProductsService
  ) {
  }

  ngOnInit() {

  }

  sumCost(item: Product) {
    this.cartItems[item.upc] = item;
    if (item.quantity <= 0) {
      this.data.removeFromCart(item);
      console.log('Remove item from Cart');
    } else {
      console.log('Received Data in Cart ', item);
      console.log('Cart Items ', this.cartItems);
    }
    this.totalCost = Object.keys(this.cartItems).reduce((a, b) => a + this.cartItems[b].quantity * this.cartItems[b].price, 0);
    console.log('Total Cost ', this.totalCost);
    console.log('Cart Items ', this.cartItems);
  }
}
