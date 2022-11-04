import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoListFeatureComponent} from "./component/todo.component";
import {ListComponent} from "./component/list/list.component";
import {ItemComponent} from "./component/list/item/item.component";
import {TodoRoutingModule} from "./todo-routing.module";
import { ListPickerComponent } from './component/list-picker/list-picker.component';



@NgModule({
  declarations: [
    TodoListFeatureComponent,
    ListComponent,
    ItemComponent,
    ListPickerComponent
  ],
  imports: [
    TodoRoutingModule,
    CommonModule
  ]
})
export class TodoModule { }
