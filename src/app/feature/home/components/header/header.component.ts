import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpService } from 'src/app/core/http.service';
import { ISearchModel } from '../../shared/models/breeds-search.model';
import { MatDialog } from '@angular/material/dialog';
import { DetailsComponent } from 'src/app/feature/breed-detail/containers/details/details.component';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  myControl = new FormControl();
  options: ISearchModel[] = [];
  constructor(private httpService: HttpService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllBreeds();
  }

  getAllBreeds() {
    this.httpService
      .request(`${environment.apiUrl}breeds/list/all`, 'GET')
      .then((response) => {
        const breeds = response.message;
        this.options = Object.keys(breeds).reduce((acc, key) => {
          const newItemFormat =
            breeds[key].length > 0
              ? breeds[key].map((subBreed: string) => ({
                  fullName: `${key} ${subBreed}`,
                  breed: key,
                  subBreed: subBreed,
                }))
              : [
                  {
                    fullName: key,
                    breed: key,
                    subBreed: null,
                  },
                ];
          return acc.concat(newItemFormat);
        }, []);
      });
  }

  viewDetails(data: ISearchModel) {
    this.dialog.open(DetailsComponent, {
      width: '1000px',
      data: data,
      panelClass: 'breed-details-modal',
    });
  }
}
