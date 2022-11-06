import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {TodoList} from "../../model/todo-list";
import {TodoListService} from "../../service/todo-list.service";

@Component({
  selector: 'app-list-picker',
  templateUrl: './list-picker.component.html'
})
export class ListPickerComponent {

  lists$: Observable<TodoList[]>;

  newListName = '';

  constructor(private todoListService: TodoListService) {
    this.lists$ = this.todoListService.todoLists$;
  }

  createNewList(): void {
    this.todoListService.createNewList(this.newListName);
    this.newListName = '';
  }

  deleteList(list: TodoList, event: MouseEvent): void {
    event.stopPropagation();
    this.todoListService.removeList(list.id);
  }

  sync(): void {
    this.todoListService.sync();
  }
}
