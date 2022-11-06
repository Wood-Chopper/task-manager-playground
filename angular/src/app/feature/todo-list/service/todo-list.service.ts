import { Injectable } from '@angular/core';
import {TodoListClient} from "../client/todo-list.client";
import {TodoListsStore} from "../store/todo-lists.store";
import {TodoList} from "../model/todo-list";

@Injectable({
  providedIn: 'root'
})
//Pas une facade mais un service. Ou alors, facade + service (need use case)
// Supprimer listes vide avec "êtes vous sûr ?"
// Sync
//On oublie le concept d'effects avec cette architecture
export class TodoListService {

  todoLists$ = this.todoListStore.todoLists$;
  todoList$ = (listId: number) => this.todoListStore.todoList$(listId);

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

  sort(listId: number): void {
    this.todoListClient.sort(listId)
      .subscribe(items => this.todoListStore.setItems(listId, items))
  }

  sync(): void {
    this.todoListClient.getAllList()
      .subscribe(lists => this.todoListStore.initialize(lists))
  }
}
