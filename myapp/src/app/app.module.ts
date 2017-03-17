import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '@angular/material';

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
import { MusicService } from './providers/music.service';
import { NotFoundComponent } from './notfound/notfound.component';
import { NgProgressModule } from 'ng2-progressbar';

import 'hammerjs';
import { LocationStrategy, HashLocationStrategy } from "@angular/common";


@NgModule({
  declarations: [
     AppComponent,
    MenuComponent,
    MusicComponent,
    MusicDetailComponent,
    PlayerComponent,
    SearchComponent,
    MenuMobileComponent,
    ListHotSongComponent,
    SearchFormComponent,
    NotFoundComponent,
    ListSongComponent
  ],
  imports: [
    MaterialModule,
    NgProgressModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '', children: [
          {
            path: 'song', children:
            [
              {
                path: ':id', component: MusicDetailComponent
              },
              {
                  path: '', component: MusicComponent
              }
            ]
          },
          { path: '', component: MusicComponent },
        ]
      },
      {
        path: 'search', children: [
          { path: ':value', component: SearchComponent },
          { path: '', component: NotFoundComponent },

        ]
      },
      { path: '**', component: NotFoundComponent },
    ]
      , { useHash: true }
    )

  ],
  providers: [MusicService],
  bootstrap: [AppComponent]
})
export class AppModule { }
