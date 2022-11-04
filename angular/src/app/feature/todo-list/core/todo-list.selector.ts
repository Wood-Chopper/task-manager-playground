import { Injectable } from '@angular/core';
import {TodoListClient} from "../client/todo-list.client";
import {TodoListsStore} from "../store/todo-lists.store";
import {TodoList} from "../model/types";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoListSelector {

  list$ = this.todoListStore.select(lists => lists);

  constructor(private todoListStore: TodoListsStore) {}

  selectList(listId: number): Observable<TodoList> {
    return this.todoListStore.select(state => state.find(lists => lists.id === listId) as TodoList)
  }
}
