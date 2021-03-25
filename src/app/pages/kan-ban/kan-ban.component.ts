import { CdkDragDrop, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { TaskDialogComponent } from '../../components/task-dialog/task-dialog.component';
import { Task } from '../../interfaces/task';
import { TaskDialogResult } from '../../interfaces/task-dialog-data';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { getObservable } from '../../utils/get-observable';

@Component({
  selector: 'app-kan-ban',
  templateUrl: './kan-ban.component.html',
  styleUrls: ['./kan-ban.component.scss']
})
export class KanBanComponent {
  
  todo: Observable<Task[]>;
  inProgress: Observable<Task[]>;
  done: Observable<Task[]>;

  backLogIcon: string;
  inProgressIcon: string;
  doneIcon: string;

  constructor(private dialog: MatDialog, private store: AngularFirestore) {
    this.todo = getObservable(this.store.collection('todo'));
    this.inProgress = getObservable(this.store.collection('inProgress'));
    this.done = getObservable(this.store.collection('done'));

    this.backLogIcon = 'assignment_late';
    this.inProgressIcon = 'build_circle';
    this.doneIcon = 'assignment_turned_in';
  }

  drop(event: CdkDragDrop<Task[]>): void {
    if (event.previousContainer === event.container) {
      return;
    }
    const item = event.previousContainer.data[event.previousIndex];
    this.store.firestore.runTransaction(() => {
      return Promise.all([
        this.store.collection(event.previousContainer.id).doc(item.id).delete(),
        this.store.collection(event.container.id).add(item)
      ]);
    });
    transferArrayItem(
      event.previousContainer.data,
      event.container.data,
      event.previousIndex,
      event.currentIndex
    );
  }

  edit(list: 'done' | 'todo' | 'inProgress', task: Task): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        task: { ...task },
        enableDelete: true
      }
    });
    dialogRef.afterClosed().subscribe((result: TaskDialogResult) => {
      if (!result) {
        return;
      }
      if (result.delete) {
        this.store.collection(list).doc(task.id).delete();
      } else {
        this.store.collection(list).doc(task.id).update(result.task);
      }
    });
  }

  newTask(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '280px',
      data: {
        task: {}
      }
    });

    dialogRef.afterClosed().subscribe((result: TaskDialogResult) => {
      if (result?.task) {
        this.store.collection('todo').add(result.task);
      }
    });
  }
}
