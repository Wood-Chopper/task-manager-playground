import {APP_INITIALIZER, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TaskListFeatureComponent} from "./component/task-list.component";
import {ListComponent} from "./component/list/list.component";
import {ItemComponent} from "./component/item/item.component";
import {TaskManagerRoutingModule} from "./task-manager-routing.module";
import { ListPickerComponent } from './component/list-picker/list-picker.component';
import {TaskManagerStore} from "./store/task-manager.store";
import {TaskManagerClient} from "./client/task-manager.client";
import {Observable, tap} from "rxjs";
import {FormsModule} from "@angular/forms";

function initializeAppFactory(client: TaskManagerClient, store: TaskManagerStore): () => Observable<any> {
  return () => client.getAllList().pipe(
    tap(v => console.log(v)),
    tap(lists => store.initialize(lists))
  );
}

@NgModule({
  declarations: [
    TaskListFeatureComponent,
    ListComponent,
    ItemComponent,
    ListPickerComponent
  ],
  imports: [
    TaskManagerRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeAppFactory,
      multi: true,
      deps: [TaskManagerClient, TaskManagerStore]
    }
  ]
})
export class TaskManagerModule { }
