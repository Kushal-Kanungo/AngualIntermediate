import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Product } from '../Modal/Product';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent {
  display: boolean = false;
  constructor(private productService: ProductsService) {}

  showDialog() {
    this.display = true;
  }

  onClose() {
    this.userForm.reset();
    console.log('dialog closed');
    
  }

  addProductForm = new FormGroup({
    productName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    companyName: new FormControl('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    description: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
  });

  get userForm() {
    return this.addProductForm;
  }
  get productName() {
    return this.addProductForm.get('productName');
  }
  get companyName() {
    return this.addProductForm.get('companyName');
  }
  public get description() {
    return this.addProductForm.get('description');
  }
  public get price() {
    return this.addProductForm.get('price');
  }

  addUserHandle() {
    let newProduct: Product = {
      id: 0,
      name: this.userForm.value.productName as string,
      subHeading: this.userForm.value.companyName as string,
      description: this.userForm.value.description as string,
      price: Number(this.userForm.value.price),
      imageUrl: '../../assets/images/thumbnail.jpg',
    };
    this.productService.addProduct(newProduct);
    this.display = false;
    return true
  }
}
