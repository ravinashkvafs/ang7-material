import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(list: any, args?: any): any {
    // console.log(list, args);

    return args ? list.filter((item) => {
      return item['name'].match(new RegExp(args, 'i'));
    }) : list;
  }

}
