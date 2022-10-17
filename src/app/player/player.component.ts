import { Component, Input, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
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
    public musicService: MusicService
  ) { }

  ngOnInit(): void {
  }

  playSound(){
    this.musicService.playSong(this.musicService.activeSong.audio);
  }

}
