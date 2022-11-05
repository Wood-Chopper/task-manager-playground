import {APP_INITIALIZER, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoListFeatureComponent} from "./component/todo.component";
import {ListComponent} from "./component/list/list.component";
import {ItemComponent} from "./component/list/item/item.component";
import {TodoRoutingModule} from "./todo-routing.module";
import { ListPickerComponent } from './component/list-picker/list-picker.component';
import {TodoListsStore} from "./store/todo-lists.store";
import {TodoListClient} from "./client/todo-list.client";
import {Observable, tap} from "rxjs";
import {FormsModule} from "@angular/forms";

function initializeAppFactory(client: TodoListClient, store: TodoListsStore): () => Observable<any> {
  return () => client.getAllList().pipe(
    tap(v => console.log(v)),
    tap(lists => store.initialize(lists))
  );
}

@NgModule({
  declarations: [
    TodoListFeatureComponent,
    ListComponent,
    ItemComponent,
    ListPickerComponent
  ],
  imports: [
    TodoRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      multi: true,
      deps: [TodoListClient, TodoListsStore]
    }
  ]
})
export class TodoModule { }
