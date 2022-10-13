import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Music, MusicService } from '../services/music.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {
  public allMusic!: Observable<Music[]>;
  songs: any[] = [];

  constructor(
    private musicService: MusicService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.allMusic = this.musicService.getMusic();
    this.allMusic.subscribe({
      next: (songs) => {
        this.songs = songs as any;
        console.table(this.songs)
      }
    })
    this.musicService.init();
  }

}
