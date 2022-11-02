import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TodoListsStore} from "../../../store/todo-lists.store";
import {TodoList} from "../../../model/types";
import {Observable} from "rxjs";

@Component({
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {

  lists$: Observable<TodoList[]>;

  constructor(private activatedRoute: ActivatedRoute, private todoListsStore: TodoListsStore) {
    this.lists$ = this.todoListsStore.list$;

    let data = this.activatedRoute.snapshot.data;
    this.todoListsStore.initialize(data['lists']||[]);
  }
}
