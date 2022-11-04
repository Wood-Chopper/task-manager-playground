import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item, TodoList} from "../model/types";

@Injectable({
  providedIn: 'root'
})
export class TodoListClient {

  constructor(private httpClient: HttpClient) {}

  getAllList(): Observable<TodoList[]> {
    return this.httpClient.get<TodoList[]>('api/lists');
  }

  createList(name: string): Observable<TodoList> {
    return this.httpClient.post<TodoList>('api/lists', {
      name: name,
      items: [],
      creationDate: new Date()
    });
  }

  delete(id: number): Observable<TodoList> {
    return this.httpClient.delete<TodoList>('api/lists/' + id);
  }
}
