import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../../Product';
import {ProductsService} from '../../products.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() item: Product;
  quantity = 1;
  @Output() eCost = new EventEmitter<Product>();

  constructor(
    private data: ProductsService
  ) {
  }

  ngOnInit() {

    this.eCost.emit(this.item);
  }

  sendTot() {
    this.item.quantity = this.quantity;
    console.log('Emmited Value', this.quantity);
    this.eCost.emit(this.item);
  }
}
