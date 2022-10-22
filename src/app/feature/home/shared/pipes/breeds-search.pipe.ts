import { Pipe, PipeTransform } from '@angular/core';
import { ISearchModel } from '../models/breeds-search.model';

@Pipe({
  name: 'breedsSearch',
})
export class BreedsSearchPipe implements PipeTransform {
  transform(breeds: ISearchModel[], searchValue: string): any {
    if (breeds.length <= 0 || !searchValue || searchValue.length < 3) {
      return [];
    } else {
      return breeds.filter((breed) =>
        breed.fullName.includes(searchValue.toLocaleLowerCase())
      );
    }
  }
}
