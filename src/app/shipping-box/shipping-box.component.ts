import { Component, Input } from '@angular/core';
import { PrimeIcons } from 'primeng/api';
import { Product } from '../Modal/Product';

@Component({
  selector: 'app-shipping-box',
  templateUrl: './shipping-box.component.html',
  styleUrls: ['./shipping-box.component.scss'],
})
export class ShippingBoxComponent {
  @Input() product!: Product;
  detailsVisible = false;

  events!: any[];

  showDetailsHandle() {
    this.detailsVisible = true;
  }
  closeDetailsHandle() {
    this.detailsVisible = false;
  }

  ngOnInit() {
    this.events = [
      {
        status: 'Ordered',
        date: '15/10/2020 10:30',
        icon: PrimeIcons.SHOPPING_CART,
        color: '#9C27B0',
        image: 'game-controller.jpg',
      },
      {
        status: 'Processing',
        date: '15/10/2020 14:00',
        icon: PrimeIcons.COG,
        color: '#673AB7',
      },
      {
        status: 'Shipped',
        date: '15/10/2020 16:15',
        icon: PrimeIcons.ENVELOPE,
        color: '#FF9800',
      },
      {
        status: 'Delivered',
        date: '16/10/2020 10:00',
        icon: PrimeIcons.CHECK,
        color: '#607D8B',
      },
    ];
  }
}
