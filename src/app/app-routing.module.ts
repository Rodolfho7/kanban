import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DragDropComponent } from './pages/drag-drop/drag-drop.component';
import { KanBanComponent } from './pages/kan-ban/kan-ban.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'kanban',
    component: KanBanComponent
  },
  {
    path: 'drag-drop',
    component: DragDropComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
