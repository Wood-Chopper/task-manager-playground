import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item, TodoList} from "../model/types";
import {DateMapping, Mapping} from "@woodchopper/property-mapper";

@Injectable({
  providedIn: 'root'
})
export class TodoListClient {

  constructor(private httpClient: HttpClient) {}

  @DateMapping('creationDate')
  @Mapping({ sourceTarget: 'items', transformEach: (item: Item) => ({...item, creationDate: new Date(item.creationDate)}) })
  getAllList(): Observable<TodoList[]> {
    return this.httpClient.get<TodoList[]>('api/lists');
  }

  @Mapping({ sourceTarget: 'items', transform: (items: Item[]) => items||[] })
  createList(name: string): Observable<TodoList> {
    return this.httpClient.post<TodoList>('api/lists', {
      name: name
    });
  }

  delete(id: number): Observable<TodoList> {
    return this.httpClient.delete<TodoList>('api/lists/' + id);
  }

  addItem(listId: number, name: string): Observable<Item> {
    return this.httpClient.post<Item>(`api/lists/${listId}/items`, {
      name: name
    })
  }

  @DateMapping('creationDate')
  sort(listId: number): Observable<Item[]> {
    return this.httpClient.get<Item[]>(`api/lists/${listId}/sort`)
  }
}
