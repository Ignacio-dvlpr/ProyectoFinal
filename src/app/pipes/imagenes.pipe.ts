import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenes',
})
export class ImagenesPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    if (value.length == 0) {
      return 'assets/images/angular.png';
    }
    return value;
  }
}
