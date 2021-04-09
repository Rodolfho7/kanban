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

  projects: Project[] = [
    {
      name: 'Site do clan',
      newItem: '',
      list: [
        {
          name: 'criar home page',
          person: 'rodolfho',
          status: 'A fazer',
          comments: 'sem comentários'
        },
        {
          name: 'criar pagina de fale conosco',
          person: 'rodolfho',
          status: 'Pendente',
          comments: 'falta fazer'
        }
      ]
    },
    {
      name: 'Dashboard Controle',
      newItem: '',
      list: [
        {
          name: 'limpar a casa',
          person: 'rodolfho',
          status: 'Fazendo',
          comments: 'sem comentários'
        },
        {
          name: 'comprar pamonha',
          person: 'rodolfho',
          status: 'Pendente',
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
      name: project.newItem,
      person: null,
      status: 'Pendente',
      comments: 'no comments'
    };
    project.newItem = '';
    project.list.push(item);
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
        newItem: '',
        list: []
      };
      this.projects.push(project);
    });
  }

  // saveName(project: Project): void {
  //   console.log(project);
  // }
}
