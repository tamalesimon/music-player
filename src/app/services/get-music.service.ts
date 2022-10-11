import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { MusicService } from './music.service';

export interface Music {
  name: string;
  cover: string;
  artist: string;
  audio: string;
  color: [string, string];
  id: number;
  active: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class GetMusicService extends MusicService {
  constructor(http: HttpClient) {
    super('/assets/my-music.json', http)
  }
}
