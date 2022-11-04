import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {TodoList} from "../../../../model/types";
import {ActivatedRoute} from "@angular/router";
import {TodoListsStore} from "../../../../store/todo-lists.store";

@Component({
  selector: 'app-list-picker',
  templateUrl: './list-picker.component.html'
})
export class ListPickerComponent {

  lists$: Observable<TodoList[]>;

  constructor(activatedRoute: ActivatedRoute, private todoListsStore: TodoListsStore) {
    this.lists$ = this.todoListsStore.list$;

    let data = activatedRoute.snapshot.data;
    this.todoListsStore.initialize(data['lists']||[]);
  }
}
