import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent {
  @Input() menuOpened: boolean = true;

  img = 'https://www.istockphoto.com/resources/images/PhotoFTLP/Signature-1205756464.jpg';
  constructor() { }
}
