import { Component, OnInit } from '@angular/core';
import { Product } from './Modal/Product';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'AngualIntermediate';
  value = 0;
  visible = false;
  products!: Product[];

  constructor(private productService: ProductsService) {}

  show() {
    this.visible = !this.visible;
  }

  increment() {
    this.value += 1;
  }
  decrement() {
    this.value -= 1;
  }

  ngOnInit() {
    this.products = this.productService.products;
  }

  get totalProducts() {
    return this.products.length;
  }
}
