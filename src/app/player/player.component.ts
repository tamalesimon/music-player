import { Component, Input, OnInit } from '@angular/core';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  isLibraryOpen = false;
  songST: any;
  songET: any;

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
    // TODO document why this method 'ngOnInit' is empty
  }

  playSound(){
    this.musicService.playSong(this.musicService.activeSong.audio);
    this.musicService.player.addEventListener('timeupdate', () => {
      this.songST = this.musicService.getStartTime();
      this.songET = this.musicService.getEndTime();
      console.log(this.songET);
    })
  }

  playNextSong(){
    this.musicService.playNext();
  }

  playPreviousSong(){
    this.musicService.playPrevious();
  }

  startMusic(){
    this.musicService.getStartTime()
  
  }

}
