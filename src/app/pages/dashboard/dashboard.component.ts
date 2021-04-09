import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewProjectDialogComponent } from '../../components/new-project-dialog/new-project-dialog.component';
import { Project, Todo } from '../../entities/project';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  img = 'https://www.istockphoto.com/resources/images/PhotoFTLP/Signature-1205756464.jpg';
  newItem: string;

  projects: Project[] = [
    {
      name: 'Site do clan',
      list: [
        {
          name: 'criar home page',
          person: 'rodolfho',
          status: 'doing',
          comments: 'sem comentários'
        },
        {
          name: 'criar pagina de fale conosco',
          person: 'rodolfho',
          status: 'pendent',
          comments: 'falta fazer'
        }
      ]
    },
    {
      name: 'Dashboard Controle',
      list: [
        {
          name: 'limpar a casa',
          person: 'rodolfho',
          status: 'doing',
          comments: 'sem comentários'
        },
        {
          name: 'comprar pamonha',
          person: 'rodolfho',
          status: 'pendent',
          comments: 'falta fazer'
        }
      ]
    }
  ];

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  drop(project: Project, event: CdkDragDrop<any[]>): void {
    moveItemInArray(project.list, event.previousIndex, event.currentIndex);
  }

  addItem(project: Project) {
    const item: Todo = {
      name: this.newItem,
      person: null,
      status: 'pendent',
      comments: 'no comments'
    };

    project.list.push(item);
    this.newItem = '';
  }

  createNewProject(): void {
    const dialogRef = this.dialog.open(NewProjectDialogComponent, {
      width: '270px'
    });
    dialogRef.afterClosed().subscribe((resultName: string) => {
      if (!resultName) {
        return;
      }
      const project: Project = {
        name: resultName,
        list: []
      };
      this.projects.push(project);
    });
  }

  saveName(project: Project): void {
    console.log(project);
  }
}
