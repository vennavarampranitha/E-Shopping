import {Component, OnInit} from '@angular/core';
import {Product} from '../Product';
import {ProductsService} from '../products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: Product[];

  constructor(
    private data: ProductsService
  ) {
  }

  ngOnInit(): void {
    this.data.getProducts(0).subscribe(data => {
      this.items = data;
    });
  }

  replaceImg(item: Product) {
    console.log('Reaplce');
    item.image = 'http://lorempixel.com/g/400/200';
  }
}
