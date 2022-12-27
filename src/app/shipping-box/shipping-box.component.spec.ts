// import { ComponentFixture, TestBed, async } from '@angular/core/testing';

// import { ShippingBoxComponent } from './shipping-box.component';
// import { VisibleDirective } from '../visible.directive';
// import { Component } from '@angular/core';
// import { Product } from '../Modal/Product';

// describe('ShippingBoxComponent', () => {
//   let component: ShippingBoxComponent;
//   let fixture: ComponentFixture<ShippingBoxComponent>;
//   let testHostComponent: TestHostComponent;
//   let testHostFixture: ComponentFixture<TestHostComponent>

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ ShippingBoxComponent, VisibleDirective, TestHostComponent]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(ShippingBoxComponent);
//     component = fixture.componentInstance;
//     testHostFixture = TestBed.createComponent(TestHostComponent);
//     testHostComponent = testHostFixture.componentInstance;
//     testHostFixture.detectChanges();
//     fixture.detectChanges();
//   });


//   it('should create', () => {
//     // testHostComponent.setInput({id: 1, name:'kushal',description:'lorem', price: 122, imageUrl: 'sadfwsfa', subHeading:'apple'});
//     // component.product = {id: 1, name:'kushal',description:'lorem', price: 122, imageUrl: 'sadfwsfa', subHeading:'apple'}
//     fixture.detectChanges();
//     // expect(component.product.id).toBe(1);
//   });
// });

// @Component({
//   selector: `host-component`,
//   template: `<app-shipping-box [product]="input"></app-shipping-box>`
// })
// class TestHostComponent {
//   private input!: Product;
//   setInput(newInput: Product) {
//     this.input = newInput;
//   }
// }