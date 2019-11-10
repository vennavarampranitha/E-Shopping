import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './Product';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {MatSnackBar, MatSnackBarModule} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: Observable<Product[]>;
  cart: string[] = [];
  cartProducts: Product[] = [];

  constructor(
    private http: HttpClient,
    private snack: MatSnackBar
  ) {
    this.products = this.http.get<Product[]>('./assets/products.json');
    this.products
      .subscribe(data => {
        console.log('Data Http ', data[Math.floor(Math.random() * 100)]);
      });
  }

  getProducts(x?: number): Observable<Product[]> {
    return this.products.pipe(
      map(data => {
        return data.sort(() => {
          return .5 - Math.random();
        }).slice(x, x + 50);
      })
    );
  }

  async addToCart(item: Product) {
    if (!this.cart.includes(item.upc)) {
      this.cart.push(item.upc);
    } else {
      this.snack.open('Already Added to Cart', '', {
        duration: 1000
      });
    }
    this.cartProducts.push(item);
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
