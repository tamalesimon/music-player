import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SongComponent } from './song/song.component';
import { PlayerComponent } from './player/player.component';
import { CommonModule } from '@angular/common';
import { GetMusicService } from './services/get-music.service';
import { MusicService } from './services/music.service';
import { LibraryComponent } from './library/library.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    SongComponent,
    PlayerComponent,
    LibraryComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot([
      { path: '', component: SongComponent },
    ])
  ],
  providers: [
    MusicService,
    GetMusicService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
