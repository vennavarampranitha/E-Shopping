import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './Product';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatSnackBar, MatSnackBarModule} from '@angular/material';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Observable<Product[]>;
  cart: string[] = [];
  cartProducts: Product[] = [];

  constructor(
    private snack: MatSnackBar,
    private afs: AngularFirestore
  ) {

    if (JSON.parse(localStorage.getItem('cart')) as Product[]) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')) as Product[];
      this.cartProducts.forEach(item => {
        this.cart.push(item.upc);
      });
    }
    this.products = this.afs.collection<Product>('Products', ref => ref.limit(50)).valueChanges();
  }

  getProducts(x?: number): Observable<Product[]> {
    return this.products;
  }

  removeFromCart(item: Product) {
    console.log('Removed Item from cart');
    this.cartProducts = this.cartProducts.filter(prod => {
      return prod.upc !== item.upc;
    });
    this.cart = this.cart.filter(str => {
      return str !== item.upc;
    });
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  async addToCart(item: Product) {
    item.quantity = 1;
    if (!this.cart.includes(item.upc)) {
      this.cart.push(item.upc);
    } else {
      this.snack.open('Already Added to Cart', '', {
        duration: 1000
      });
    }
    this.cartProducts.push(item);
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));

  }

  inCart(item: string) {
    return this.cart.includes(item);
  }

  getItem(id: string) {
    return this.products.pipe(
      map(items => {
        return items.find(val => {
          return val.upc === id;
        });
      })
    );
  }
}
