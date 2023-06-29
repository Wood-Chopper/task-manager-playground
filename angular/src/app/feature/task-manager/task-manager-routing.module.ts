import { NgModule } from '@angular/core';
import { ListComponent } from "./component/list/list.component";
import { RouterModule, Routes } from "@angular/router";
import { ListIdResolver } from "./resolver/list-id.resolver";
import { ListPickerComponent } from "./component/list-picker/list-picker.component";

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
    component: ListPickerComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskManagerRoutingModule { }
