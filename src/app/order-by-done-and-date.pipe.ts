import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderByDoneAndDate'
})
export class OrderByDoneAndDatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
