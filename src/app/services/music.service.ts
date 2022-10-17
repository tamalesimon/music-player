import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

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
  providedIn: 'root',
})
export class MusicService {
  private allMusic = new BehaviorSubject<Music[]>([]);
  public musicUrl: string = '/assets/my-music.json';
  public activeSong: any;
  public isPlaying: boolean = false;
  player = new Audio();

  @Input()
  showPlayList: boolean = false;

  constructor(private http: HttpClient) {}

  public init(): void {
    this.http.get<Music[]>(this.musicUrl).subscribe((music) => {
      this.allMusic.next(music);
    });
  }

  public getMusic(): Observable<Music[]> {
    return this.allMusic;
  }

  showLibrary() {
    this.showPlayList = !this.showPlayList;
  }

  changeIsPlaying() {
    this.isPlaying = !this.isPlaying;
  }

  public getSongById(id: number): Observable<Music> {
    return this.getMusic().pipe(
      map((music: any[]) => {
        return music.find((song: { id: number }) => song.id === id);
      })
    );
  }

  public playSong(audioSrc: string) {
    this.player.src = audioSrc;
    if (this.isPlaying) {
      this.changeIsPlaying();
      this.player.pause();
    } else {
      this.changeIsPlaying();
      this.player.play();
    }
  }

  public pauseSong(audioSrc: string) {
    let audio = new Audio(audioSrc);
    audio.pause();
  }

  public nextSong(audio: string) {
    this.activeSong.next(audio);
  }

  public prevSong(audio: string) {
    this.activeSong.prev(audio);
  }
}
