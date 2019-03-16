import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // console.log(value, args);

    return args ? value.filter((item) => {
      return item['name'].match(new RegExp(args, 'i'));
    }) : value;
  }

}
