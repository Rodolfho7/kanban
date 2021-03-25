import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-project-dialog',
  templateUrl: './new-project-dialog.component.html',
  styleUrls: ['./new-project-dialog.component.scss']
})
export class NewProjectDialogComponent {
  projectName: string;
  constructor(public dialogRef: MatDialogRef<NewProjectDialogComponent>) { }

  cancel(): void {
    this.dialogRef.close();
  }
}
