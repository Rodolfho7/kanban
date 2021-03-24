import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../interfaces/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() borderColor: string;
  @Input() iconName: string;
  @Input() task: Task | undefined;
  @Output() edit = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
  }

}
