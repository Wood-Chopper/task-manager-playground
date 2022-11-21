import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {Item, TaskList} from "../../model/task-list";
import {TaskManagerService} from "../../service/task-manager.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  list$: Observable<TaskList>;
  newItemName = '';

  constructor(activatedRoute: ActivatedRoute,
              private taskManagerService: TaskManagerService) {
    const listId = activatedRoute.snapshot.data['listId'];
    this.list$ = taskManagerService.taskList$(listId);
  }

  createNewItem(listId: number): void {
    this.taskManagerService.addItem(listId, this.newItemName);
    this.newItemName = '';
  }

  sort(listId: number): void {
    this.taskManagerService.sort(listId);
  }

  switch(listId: number, itemId: number, value: boolean) {
    this.taskManagerService.switch(listId, itemId, value);
  }
}
