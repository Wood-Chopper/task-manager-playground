import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {TodoList} from "../../model/types";
import {TodoListAction} from "../../core/todo-list.action";
import {TodoListSelector} from "../../core/todo-list.selector";

@Component({
  selector: 'app-list-picker',
  templateUrl: './list-picker.component.html'
})
export class ListPickerComponent {

  lists$: Observable<TodoList[]>;

  newListName = '';

  constructor(private todoListSelector: TodoListSelector, private todoListAction: TodoListAction) {
    this.lists$ = this.todoListSelector.list$;
  }

  createNewList(): void {
    this.todoListAction.createNewList(this.newListName);
    this.newListName = '';
  }

  deleteList(list: TodoList, event: MouseEvent): void {
    event.stopPropagation();
    this.todoListAction.removeList(list.id);
  }
}
