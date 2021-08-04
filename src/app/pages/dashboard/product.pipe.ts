import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../model/product';

@Pipe({
  name: 'product'
})
export class ProductPipe implements PipeTransform {

  transform(value: Product[], filterText?: string): Product[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : null;
    const filtred = filterText ? value.filter((p: Product) => p.title?.toLowerCase().includes(filterText)) : value;

    // console.log(value, ' - ', filterText);
    // console.log('filtred:', filtred);

    return filtred;
  }

}
