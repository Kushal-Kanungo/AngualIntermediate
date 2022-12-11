import { Component } from '@angular/core';

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
}
