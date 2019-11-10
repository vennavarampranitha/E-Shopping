import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductsService} from './products.service';
import {Product} from './Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private data: ProductsService
  ) {

  }

  ngOnInit(): void {
  }

}
