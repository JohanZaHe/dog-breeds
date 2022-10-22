import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './feature/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './feature/home/components/nav-bar/nav-bar.component';
import { HeaderComponent } from './feature/home/components/header/header.component';
import { SummaryComponent } from './feature/home/components/summary/summary.component';
import { HistoryComponent } from './feature/home/components/history/history.component';
import { ContactComponent } from './feature/home/components/contact/contact.component';
import { MainViewComponent } from './feature/home/containers/main-view/main-view.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { HttpService } from './core/http.service';
import { BreedsSearchPipe } from './feature/home/shared/pipes/breeds-search.pipe';
import { ImagePipe } from './feature/home/shared/pipes/image.pipe';
import { DetailsComponent } from './feature/breed-detail/containers/details/details.component';
import { VideoComponent } from './feature/breed-detail/components/video/video.component';
import { SuggestionsComponent } from './feature/breed-detail/components/suggestions/suggestions.component';
import { CharacteristicsComponent } from './feature/breed-detail/components/characteristics/characteristics.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    HeaderComponent,
    SummaryComponent,
    HistoryComponent,
    ContactComponent,
    MainViewComponent,
    BreedsSearchPipe,
    ImagePipe,
    DetailsComponent,
    VideoComponent,
    SuggestionsComponent,
    CharacteristicsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent],
})
export class AppModule {}
