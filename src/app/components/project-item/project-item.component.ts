import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../entities/project';

type StatusOptions = {
  name: string,
  className: string
};

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  @Input() item: Todo;

  img = 'https://www.istockphoto.com/resources/images/PhotoFTLP/Signature-1205756464.jpg';

  statusList: StatusOptions[] = [
    {
      name: 'Fazendo',
      className: 'doing'
    },
    {
      name: 'Pendente',
      className: 'pendent'
    },
    {
      name: 'A fazer',
      className: 'to-do'
    },
    {
      name: 'Empacado',
      className: 'stuck'
    }
  ];

  selectedStatus: string;

  constructor() { }

  ngOnInit(): void {
    this.selectedStatus = this.statusList.find((item) => item.name === this.item.status).className;
  }

  setStatus(status: StatusOptions): void {
    this.item.status = status.name;
    this.selectedStatus = status.className;
  }
}
