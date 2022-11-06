import { Injectable } from '@angular/core';
import {TodoListClient} from "../client/todo-list.client";
import {TodoListsStore} from "../store/todo-lists.store";

@Injectable({
  providedIn: 'root'
})
export class TodoListAction {

  constructor(private todoListClient: TodoListClient, private todoListStore: TodoListsStore) {}

  createNewList(name: string): void {
    this.todoListClient.createList(name)
      .subscribe(createdList => this.todoListStore.createNewList(createdList))
  }

  removeList(id: number): void {
    this.todoListClient.delete(id)
      .subscribe(() => this.todoListStore.remove(id))
  }

  addItem(listId: number, name: string): void {
    this.todoListClient.addItem(listId, name)
      .subscribe(newItem => this.todoListStore.addItem(listId, newItem))
  }

  sort(listId: number) {
    this.todoListClient.sort(listId)
      .subscribe(items => this.todoListStore.setItems(listId, items))
  }
}
