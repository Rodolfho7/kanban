import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { TaskComponent } from './components/task/task.component';
import { MatCardModule } from '@angular/material/card';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { TaskDialogComponent } from './components/task-dialog/task-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { ExpansionComponent } from './components/expansion/expansion.component';
import { KanBanComponent } from './pages/kan-ban/kan-ban.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { NewProjectDialogComponent } from './components/new-project-dialog/new-project-dialog.component';
import { ProjectItemComponent } from './components/project-item/project-item.component';
import { DragDropComponent } from './pages/drag-drop/drag-drop.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskDialogComponent,
    ExpansionComponent,
    KanBanComponent,
    SideMenuComponent,
    DashboardComponent,
    AvatarComponent,
    NewProjectDialogComponent,
    ProjectItemComponent,
    DragDropComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    DragDropModule,
    MatButtonModule,
    MatDialogModule,
    MatExpansionModule,
    MatBadgeModule,
    MatMenuModule,
    FormsModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
