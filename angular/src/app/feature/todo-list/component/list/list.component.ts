import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TodoListsStore} from "../../../../store/todo-lists.store";
import {Observable} from "rxjs";
import {TodoList} from "../../../../model/types";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  list$: Observable<TodoList>;

  constructor(activatedRoute: ActivatedRoute, private todoListsStore: TodoListsStore) {
    const listId = activatedRoute.snapshot.data['listId'];
    this.list$ = todoListsStore.select(state => state.find(lists => lists.id === listId) as TodoList);
  }
}
