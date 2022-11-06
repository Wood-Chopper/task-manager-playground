import { Injectable } from '@angular/core';
import {TodoListClient} from "../client/todo-list.client";
import {TodoListsStore} from "../store/todo-lists.store";
import {TodoList} from "../model/types";

@Injectable({
  providedIn: 'root'
})
export class TodoListFacade {

  todoLists$ = this.todoListStore.select(lists => lists);

  todoList$ = (listId: number) =>
    this.todoListStore.select(state => state.find(lists => lists.id === listId) as TodoList);

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
