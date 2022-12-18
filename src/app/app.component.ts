import { Component } from '@angular/core';
import { Product } from './Modal/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'AngualIntermediate';
  value = 0;
  visible = false;

  show() {
    this.visible = !this.visible;
  }

  increment() {
    this.value += 1;
  }
  decrement() {
    this.value -= 1;
  }

  products: Product[] = [
    {
      id: 1,
      name: 'MacBook Pro',
      subHeading: 'Apple',
      description: 'Ultra fast and sleek design. Made for power users.',
      imageUrl: '../../assets/images/products/laptop.jpeg',
      // imageUrl: 'https://picsum.photos/640/360',
      price: 130000,
    },
    {
      id: 2,
      name: 'Galaxy S22',
      subHeading: 'Samsung',
      description: 'Best process and best camera. Capture moments like a pro.',
      imageUrl: '../../assets/images/products/phone.webp',
      // imageUrl: 'https://picsum.photos/640/361',
      price: 79999,
    },
    {
      id: 3,
      name: 'Quite Comfort 35',
      subHeading: 'Bose',
      description: 'Best sound in the industry. Feel the music in soul.',
      imageUrl: '../../assets/images/products/headphone.webp',
      // imageUrl: 'https://picsum.photos/640/362',
      price: 35999,
    },
  ];
}
