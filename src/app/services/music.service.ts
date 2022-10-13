import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

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
export class MusicService {
  private allMusic = new BehaviorSubject<Music[]>([]);
  public musicUrl: string = '/assets/my-music.json';

  @Input()
  showPlayList: boolean = false;

  constructor(private http: HttpClient) { }

  public init(): void {
    this.http
      .get<Music[]>(this.musicUrl)
        .subscribe((music) => {
          this.allMusic.next(music);
        });
  }

  public getMusic(): Observable<Music[]> {
    return this.allMusic;
  }

  showLibrary() {
    this.showPlayList = !this.showPlayList;
  }

}
