import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() clickEvent: EventEmitter<any> = new EventEmitter();

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

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.clickEvent.emit(event)
  }

}
