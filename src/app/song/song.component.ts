import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
import { Music, MusicService } from '../services/music.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
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
    public musicService: MusicService,
  ) { }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  }



}
