import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portafolio';
  public _opened: boolean = false;

  constructor(){};
  
  public _toggleSidebar() {
    this._opened = !this._opened;
  }

}
