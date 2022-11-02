import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoComponent} from "./component/todo.component";
import {ListComponent} from "./component/list/list.component";
import {ItemComponent} from "./component/list/item/item.component";



@NgModule({
  declarations: [
    TodoComponent,
    ListComponent,
    ItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TodoComponent
  ]
})
export class TodoModule { }
