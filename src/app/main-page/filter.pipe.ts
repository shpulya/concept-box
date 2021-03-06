import { Injectable, Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})

@Injectable()
export class FilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if(!items) return [];
    value = value.toLowerCase();
    if (!items) return items;
    return items.filter(it => it[field].toLowerCase().includes(value)  );
  }
}
