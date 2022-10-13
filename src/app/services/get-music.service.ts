import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MusicService } from './music.service';

@Injectable({
  providedIn: 'root'
})
export class GetMusicService extends MusicService {
  constructor(http: HttpClient) {
    super(http);
   }
}
