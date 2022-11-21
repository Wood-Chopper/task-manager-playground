import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'task-manager',
    loadChildren: () => import('./feature/task-manager/task-manager.module').then(m => m.TaskManagerModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/task-manager'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
