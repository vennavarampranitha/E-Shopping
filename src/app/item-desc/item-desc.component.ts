import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductsService} from '../products.service';
import {Product} from '../Product';

@Component({
  selector: 'app-item-desc',
  templateUrl: './item-desc.component.html',
  styleUrls: ['./item-desc.component.scss']
})
export class ItemDescComponent implements OnInit {
  currItem: Product = null;

  constructor(
    private route: ActivatedRoute,
    private data: ProductsService
  ) {
  }

  ngOnInit() {
    const id = this.route.params.subscribe(param => {
      console.log(param.id);
      this.data.getItem(param.id).subscribe(val => {
        this.currItem = val;
      });
    });
  }
}
