import { HttpClient } from '@angular/common/http';
import { Injectable, Input } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import * as moment from 'moment';

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

  // formatTime(time: number, format: string = 'mm:ss') {
  //   const momentTime = time * 1000;
  //   return moment.utc(momentTime).format(format);
  // }

  formatTime(time: any) {
    return Math.floor(time/60) + ':' + ('0' + Math.floor(time%60)).slice(-2);
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

  public getStartTime() {
    return this.formatTime(this.player.currentTime);
  }

  public getEndTime() {
   if (this.isPlaying) {
      return this.formatTime(this.player.duration);
   } else {
     return '0:00';
   }
  }

  public playNext(){
    let currentSong = this.activeSong.id;
    let totalSongs = this.allMusic.value.length;
    if(currentSong < totalSongs){
      this.getSongById(currentSong + 1).subscribe((song) => {
        this.activeSong = song;
        this.playSong(song.audio);
      });
    } else {
      this.getSongById(currentSong).subscribe((song) => {
        this.activeSong = song;
        this.playSong(song.audio);
      });
    }
  }

  public playPrevious() {
    let currentSong = this.activeSong.id;
    if(currentSong > 1){
      this.getSongById(currentSong - 1).subscribe((song) => {
        this.activeSong = song;
        this.playSong(song.audio);
      });
  }
}

  public pauseSong() {
    if(this.isPlaying) {
      this.player.pause();
      this.changeIsPlaying();
    } else {
      this.player.play();
    }
  }



  public nextSong(audio: string) {
    this.activeSong.next(audio);
  }

  public prevSong(audio: string) {
    this.activeSong.prev(audio);
  }

  seekTo(seconds: any) {
    this.player.currentTime = seconds;
  }
}
