import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<object>, arg1?: string, arg2?: boolean): any {
    // console.log(value, arg1, arg2);

    value.sort((a: object, b: object) => {
      // console.log(a[arg1], b[arg1])
      if (a[arg1] < b[arg1]) return -1;
      else if (a[arg1] > b[arg1]) return 1;
      else return 0;
    });

    return arg2 ? value.reverse() : value;
  }

}
