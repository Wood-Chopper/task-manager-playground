import { Injectable } from '@angular/core';
import { TaskManagerClient } from "../client/task-manager.client";
import { TaskManagerStore } from "../store/task-manager.store";

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {

  taskLists$ = this.taskManagerStore.taskLists$;
  taskList$ = (listId: number) => this.taskManagerStore.taskList$(listId);

  constructor(private taskManagerClient: TaskManagerClient, private taskManagerStore: TaskManagerStore) {}

  createNewList(name: string): void {
    this.taskManagerClient.createList(name)
      .subscribe(createdList => this.taskManagerStore.createNewList(createdList));
  }

  removeList(id: number): void {
    this.taskManagerClient.delete(id)
      .subscribe(() => this.taskManagerStore.remove(id));
  }

  addItem(listId: number, name: string): void {
    this.taskManagerClient.addItem(listId, name)
      .subscribe(newItem => this.taskManagerStore.addItem(listId, newItem));
  }

  sort(listId: number): void {
    this.taskManagerClient.sort(listId)
      .subscribe(items => this.taskManagerStore.setItems(listId, items));
  }

  switch(listId: number, itemId: number, value: boolean) {
    this.taskManagerClient.switch(listId, itemId, value)
      .subscribe(item => this.taskManagerStore.patchItem(listId, itemId, { checked: value }));
  }

  sync(): void {
    this.taskManagerClient.getAllList()
      .subscribe(lists => this.taskManagerStore.initialize(lists));
  }
}
