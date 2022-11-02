import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TodoList} from "../model/types";

@Injectable({
  providedIn: 'root'
})
export class TodoListClient {

  constructor(private httpClient: HttpClient) {}

  getAllList(): Observable<TodoList[]> {
    return this.httpClient.get<TodoList[]>('api/lists');
  }
}
