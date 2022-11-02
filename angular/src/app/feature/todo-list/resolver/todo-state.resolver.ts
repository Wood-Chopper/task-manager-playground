import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {TodoList} from "../../../model/types";
import {TodoListClient} from "../../../client/todo-list.client";

@Injectable({
  providedIn: 'root'
})
export class TodoStateResolver implements Resolve<TodoList[]> {

  constructor(private todoListClient: TodoListClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TodoList[]> {
    return this.todoListClient.getAllList();
  }
}
