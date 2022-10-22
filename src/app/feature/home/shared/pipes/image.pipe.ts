import { Pipe, PipeTransform } from '@angular/core';
import { HttpService } from 'src/app/core/http.service';
import { environment } from 'src/environments/environment';
import { ISearchModel } from '../models/breeds-search.model';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  constructor(private httpService: HttpService) {}

  transform({ subBreed, breed }: ISearchModel): Promise<any> {
    const url = !subBreed
      ? `breed/${breed}/images/random`
      : `breed/${breed}/${subBreed}/images/random`;
    return this.httpService
      .request(`${environment.apiUrl + url}`, 'GET')
      .then((response) => response.message);
  }
}
