import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoListFeatureComponent} from "./component/todo.component";
import {ListComponent} from "./component/list/list.component";
import {ItemComponent} from "./component/list/item/item.component";
import {ActivatedRouteSnapshot, RouterModule, RouterStateSnapshot, Routes} from "@angular/router";
import {TodoStateResolver} from "./resolver/todo-state.resolver";
import {ListIdResolver} from "./resolver/list-id.resolver";
import {ListPickerComponent} from "./component/list-picker/list-picker.component";

const routes: Routes = [
  {
    path: 'list/:id',
    component: ListComponent,
    resolve: {
      listId: ListIdResolver
    }
  },
  {
    path: '',
    component: ListPickerComponent,
    resolve: {
      lists: TodoStateResolver
    }
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
