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

  constructor(
    ) { }

  ngOnInit(): void {
  }

  // getSong() {
  // }

}
