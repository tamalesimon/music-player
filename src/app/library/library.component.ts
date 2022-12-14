import { Component, OnInit, Input } from '@angular/core';
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
  isLibraryOpen = false;

  @Input()
  set event(event: Event){
    if(event) {
      this.toggle();
    }
  }

  toggle(){
    this.isLibraryOpen = !this.isLibraryOpen;
  }

  constructor(
    private musicService: MusicService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.allMusic = this.musicService.getMusic();
    this.allMusic.subscribe({
      next: (songs) => {
        this.songs = songs as any;
      }
    })
    this.musicService.init();
  }

  getSong(id: number) {
    this.musicService.getSongById(id).subscribe({
      next: (song) => {
        this.musicService.activeSong = song;
        if(this.musicService.isPlaying === true) {
          this.musicService.playSong(song.audio);
        }
      }
    })
  }

}
