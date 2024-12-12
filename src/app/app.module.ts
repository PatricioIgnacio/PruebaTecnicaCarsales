import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EpisodesListComponent } from './components/episodes-list/episodes-list.component';
import { EpisodeDetailComponent } from './components/episode-detail/episode-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    EpisodesListComponent,
    EpisodeDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
