import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prefix',
})
export class PrefixPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    let value_str = value as String;
    if (value_str == null) return null
    if (value_str.length > 0) return `Product - ${value}`;
    return value;
  }
}
