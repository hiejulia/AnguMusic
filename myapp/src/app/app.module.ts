import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListHotSongComponent } from './list-hot-song/list-hot-song.component';
import { ListSongComponent } from './list-song/list-song.component';
import { MenuMobileComponent } from './menu-mobile/menu-mobile.component';
import { MenuComponent } from './menu/menu.component';
import { MusicDetailComponent } from './music-detail/music-detail.component';
import { MusicComponent } from './music/music.component';
import { PlayerComponent } from './player/player.component';
import { SearchComponent } from './search/search.component';
import { SearchFormComponent } from './search-form/search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ListHotSongComponent,
    ListSongComponent,
    MenuMobileComponent,
    MenuComponent,
    MusicDetailComponent,
    MusicComponent,
    PlayerComponent,
    SearchComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
