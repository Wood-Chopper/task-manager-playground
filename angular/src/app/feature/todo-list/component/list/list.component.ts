import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {TodoList} from "../../model/todo-list";
import {TodoListFacade} from "../../facade/todo-list.facade";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  list$: Observable<TodoList>;
  newItemName = '';

  constructor(activatedRoute: ActivatedRoute,
              private todoListFacade: TodoListFacade) {
    const listId = activatedRoute.snapshot.data['listId'];
    this.list$ = todoListFacade.todoList$(listId);
  }

  createNewItem(listId: number): void {
    this.todoListFacade.addItem(listId, this.newItemName);
    this.newItemName = '';
  }

  sort(listId: number): void {
    this.todoListFacade.sort(listId);
  }
}
