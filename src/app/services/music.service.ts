import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Music } from './get-music.service';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private allMusic = new BehaviorSubject<Music[]>([]);

  constructor(@Inject(String) private url: string, private http: HttpClient) { }

  public init(): void {
    this.http
      .get<Music[]>(this.url)
        .subscribe((music) => {
          this.allMusic.next(music);
        });
  }

  public getMusic(): Observable<Music[]> {
    return this.allMusic.asObservable();
  }
}
