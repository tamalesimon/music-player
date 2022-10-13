import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  @Input() isLibraryOpen = false;

  toggleLibrary(): void {
    this.isLibraryOpen = !this.isLibraryOpen;
  }

}
