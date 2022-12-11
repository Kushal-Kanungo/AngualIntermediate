import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  @Input() text!: number;

  constructor(private logger: LoggerService) {
    this.logger.log(
      `Constructor is called.\nIn Constructor Parent Data is : ${this.text}\nSo we cannot do much in constructor`
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logger.log(
      `ON CHANGE HOOK ==> Trigger when Input value changes, It runs before ONINIT and if Input is not present than this hook will not trigger.\nIn OnChanges Parent data is : ${this.text}. Changes argument is :`
    );
    this.logger.log(changes);
  }

  ngOnInit() {
    this.logger.log(
      `ON INIT Hook ==> On Init Hook Triggered On Component First Time loads. `
    );
  }

  ngDoCheck(): void {
    this.logger.log('DO CHECK => Change noticed');
  }

  ngOnDestroy() {
    console.log('ON DESTROY HOOK ==> When a component is removed');
  }
}
