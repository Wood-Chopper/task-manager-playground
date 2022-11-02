import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TodoStateResolver} from "./feature/todo-list/resolver/todo-state.resolver";
import {TodoComponent} from "./feature/todo-list/component/todo.component";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/todo'
  },
  {
    path: 'todo',
    resolve: {
      lists: TodoStateResolver,
    },
    component: TodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
