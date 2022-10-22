import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpService } from 'src/app/core/http.service';
import { ISearchModel } from 'src/app/feature/home/shared/models/breeds-search.model';
import { environment } from 'src/environments/environment';
import { IDogInfo, IMoreDetails } from '../../shared/models/more-breed-details-model';
import { IYouTubeSearch } from '../../shared/models/youtube-search.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public videoUrl: any = this.sanitizeUrl(
    'https://www.youtube.com/watch?v=ltg2J4geVbQ'
  );
  public dogInfo: IDogInfo = {};
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ISearchModel,
    private httpService: HttpService,
    private domSanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.getMoreInfoAboutTheBreed(this.data.breed);
    this.getVideoFromYoutube(this.data.fullName);
  }

  getVideoFromYoutube(keyWord: string) {
    const urlSearch = `search?part=snippet&maxResults=1&q=things you must know before getting a ${keyWord}&type=video&order=relevance&videoEmbeddable=true&key=${environment.youtubeKey}`;
    this.httpService
      .request(`${environment.youtubeApiUrl + urlSearch}`, 'GET')
      .then(({ items }: IYouTubeSearch) => {
        const {
          id: { videoId },
          snippet: {
            thumbnails: { high },
          },
        } = items[0];
        this.videoUrl = this.sanitizeUrl(
          `https://www.youtube.com/embed/${videoId}`
        );
      });
  }

  getMoreInfoAboutTheBreed(breed: string) {
    const urlSearch = `search?q=${breed}`;
    this.httpService
      .request(`${environment.moreInfoApiUrl + urlSearch}`, 'GET')
      .then((response: IMoreDetails[]) => {
        const dog = (Array.isArray(response) ? response : []).filter(
          (register) => register?.breedName?.includes(breed)
        );
        if (dog && dog.length > 0) this.dogInfo = dog[0].dogInfo;
      })
      .catch();
  }

  sanitizeUrl(url: string) {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
