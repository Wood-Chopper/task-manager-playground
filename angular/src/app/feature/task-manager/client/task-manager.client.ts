import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Item, TaskList} from "../model/task-list";
import {DateMapping, Mapping} from "@woodchopper/property-mapper";

@Injectable({
  providedIn: 'root'
})
export class TaskManagerClient {

  constructor(private httpClient: HttpClient) {}

  @DateMapping('creationDate')
  @Mapping({ sourceTarget: 'items', transformEach: (item: Item) => ({...item, creationDate: new Date(item.creationDate)}) })
  getAllList(): Observable<TaskList[]> {
    return this.httpClient.get<TaskList[]>('api/lists');
  }

  @Mapping({ sourceTarget: 'items', transform: (items: Item[]) => items||[] })
  createList(name: string): Observable<TaskList> {
    return this.httpClient.post<TaskList>('api/lists', {
      name: name
    });
  }

  delete(id: number): Observable<TaskList> {
    return this.httpClient.delete<TaskList>('api/lists/' + id);
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
