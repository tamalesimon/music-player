import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'music-player';
  event!: Event;

  onChange(event:Event) {
    this.event = event;
  }
}
