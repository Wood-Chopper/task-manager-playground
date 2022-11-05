import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {TodoList} from "../../model/types";
import {TodoListSelector} from "../../core/todo-list.selector";
import {TodoListAction} from "../../core/todo-list.action";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  list$: Observable<TodoList>;
  newItemName = '';

  constructor(activatedRoute: ActivatedRoute,
              private todoListSelector: TodoListSelector,
              private todoListAction: TodoListAction) {
    const listId = activatedRoute.snapshot.data['listId'];
    this.list$ = todoListSelector.selectList(listId);
  }

  createNewItem(listId: number): void {
    this.todoListAction.addItem(listId, this.newItemName);
    this.newItemName = '';
  }
}
