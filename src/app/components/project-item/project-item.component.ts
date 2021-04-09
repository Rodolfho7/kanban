import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../entities/project';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  @Input() item: Todo;

  img = 'https://www.istockphoto.com/resources/images/PhotoFTLP/Signature-1205756464.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
