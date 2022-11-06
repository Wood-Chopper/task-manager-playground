import {Store} from "./store";
import {Item, TodoList} from "../model/todo-list";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TodoListsStore {

  store = new Store<TodoList[]>([]);

  todoLists$ = this.store.select(lists => lists);
  todoList$ = (listId: number) =>
    this.store.select(state => state.find(lists => lists.id === listId) as TodoList);

  initialize(initialLists: TodoList[]): void {
    this.store.update(_ => initialLists);
  }

  createNewList(list: TodoList): void {
    this.store.update(state => [...state, list]);
  }

  remove(id: number): void {
    this.store.update(state => state.filter(list => list.id !== id));
  }

  addItem(listId: number, newItem: Item): void {
    this.store.update(state => state.map(list => list.id !== listId ? list : {
      ...list,
      items: [...list.items, newItem]
    }))
  }

  setItems(listId: number, items: Item[]): void {
    this.store.update(state => state.map(list => list.id !== listId ? list : {
      ...list,
      items: items
    }))
  }
}
