import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {TodoList} from "../../model/types";
import {TodoListFacade} from "../../facade/todo-list.facade";

@Component({
  selector: 'app-list-picker',
  templateUrl: './list-picker.component.html'
})
export class ListPickerComponent {

  lists$: Observable<TodoList[]>;

  newListName = '';

  constructor(private todoListFacade: TodoListFacade) {
    this.lists$ = this.todoListFacade.todoLists$;
  }

  createNewList(): void {
    this.todoListFacade.createNewList(this.newListName);
    this.newListName = '';
  }

  deleteList(list: TodoList, event: MouseEvent): void {
    event.stopPropagation();
    this.todoListFacade.removeList(list.id);
  }
}
