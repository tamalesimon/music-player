import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { Music, MusicService } from '../services/music.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
   public allMusic!: Observable<Music[]>;
   myMusic: any[] = [];

  constructor(
    private musicService: MusicService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.allMusic = this.musicService.getMusic();
    this.allMusic.subscribe({
      next: (myMusic) => {
        this.myMusic = myMusic as any;
        console.table(this.myMusic)
      }
    })
    this.musicService.init();
  }

  // getSong() {
  // }

}
