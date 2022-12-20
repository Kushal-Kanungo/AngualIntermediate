import {
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent
  implements OnInit, OnChanges, DoCheck, OnDestroy, AfterViewInit
{
  @Input() text!: number;
  value: string = 'Class Value';
  @ViewChild('box') domElement!: ElementRef;

  constructor(private logger: LoggerService) {
    // this.logger.log(
    //   `Constructor is called.\nIn Constructor Parent Data is : ${this.text}\nSo we cannot do much in constructor`
    // );

    logger.log(
      `Constructor ==> [Input Value : ${this.text}] , [Dom Element : ${this.domElement}], [Initilized Value : ${this.value}]`
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.logger.log(
    //   `ON CHANGE HOOK ==> Trigger when Input value changes, It runs before ONINIT and if Input is not present than this hook will not trigger.\nIn OnChanges Parent data is : ${this.text}. Changes argument is :`
    // );
    // this.logger.log(changes);
    this.logger.log(
      `OnChanges ==> [Input Value : ${this.text}] , [Dom Element : ${this.domElement}], [Initilized Value : ${this.value}], [Changes: ${changes}]`
    );
    this.logger.log(changes);
  }

  ngOnInit() {
    // this.logger.log(
    //   `ON INIT Hook ==> On Init Hook Triggered On Component First Time loads. `
    // );
    this.logger.log(
      `OnInit ==> [Input Value : ${this.text}] , [Dom Element : ${this.domElement}], [Initilized Value : ${this.value}]`
    );
  }

  ngDoCheck(): void {
    // this.logger.log('DO CHECK => Change noticed');
    this.logger.log(
      `DoCheck ==> [Input Value : ${this.text}] , [Dom Element : ${this.domElement}], [Initilized Value : ${this.value}]`
    );
  }

  ngAfterViewInit() {
    this.logger.log(
      `AfterViewInit ==> [Input Value : ${this.text}] , [Dom Element : ${this.domElement}], [Initilized Value : ${this.value}]`
    );
  }

  ngOnDestroy() {
    console.log('ON DESTROY HOOK ==> When a component is removed');
  }

  useless() {}
}
