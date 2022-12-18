import { Injectable } from '@angular/core';
import { Product } from './Modal/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  private _products: Product[] = [];
  public get products(): Product[] {
    return this._products;
  }
  public set products(value: Product[]) {
    this._products = value;
  }

  addProduct(product: Product) {
    product.id = this.products.length + 1;
    this.products.push(product);
  }
}
