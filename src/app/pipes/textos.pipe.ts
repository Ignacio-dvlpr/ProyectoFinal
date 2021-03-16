import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textos',
})
export class TextosPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    if (value.length == 0) {
      return 'Angular Default';
    }
    return value;
  }
}
