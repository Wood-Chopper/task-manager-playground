import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {TaskList} from "../../model/task-list";
import {TaskManagerService} from "../../service/task-manager.service";

@Component({
  selector: 'app-list-picker',
  templateUrl: './list-picker.component.html'
})
export class ListPickerComponent {

  lists$: Observable<TaskList[]>;

  newListName = '';

  constructor(private taskManagerService: TaskManagerService) {
    this.lists$ = this.taskManagerService.taskLists$;
  }

  createNewList(): void {
    this.taskManagerService.createNewList(this.newListName);
    this.newListName = '';
  }

  deleteList(list: TaskList, event: MouseEvent): void {
    event.stopPropagation();
    this.taskManagerService.removeList(list.id);
  }

  sync(): void {
    this.taskManagerService.sync();
  }
}
