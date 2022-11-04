import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'todo',
    loadChildren: () => import('./feature/todo-list/todo.module').then(m => m.TodoModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/todo'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
