import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListHotSongComponent } from './list-hot-song/list-hot-song.component';
import { ListSongComponent } from './list-song/list-song.component';

@NgModule({
  declarations: [
    AppComponent,
    ListHotSongComponent,
    ListSongComponent
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
