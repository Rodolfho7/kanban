import { Component } from '@angular/core';

@Component({  
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  closed = false;

  closeMenu(close: boolean): boolean {
    this.closed = close ? true : false;
    return closed;
  }
}
