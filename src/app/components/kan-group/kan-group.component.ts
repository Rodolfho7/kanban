import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kan-group',
  templateUrl: './kan-group.component.html',
  styleUrls: ['./kan-group.component.scss']
})
export class KanGroupComponent implements OnInit {

  @Input() name: string;
  @Input() color: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
