import {AbstractStore} from "./abstract.store";
import {Item, TodoList} from "../model/todo-list";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TodoListsStore extends AbstractStore<TodoList[]> {

  list$ = this.select(lists => lists)

  constructor() {
    super([]);
  }

  initialize(initialLists: TodoList[]): void {
    this.update(_ => initialLists);
  }

  createNewList(list: TodoList): void {
    this.update(state => [...state, list]);
  }

  remove(id: number): void {
    this.update(state => state.filter(list => list.id !== id));
  }

  addItem(listId: number, newItem: Item): void {
    this.update(state => state.map(list => list.id !== listId ? list : {
      ...list,
      items: [...list.items, newItem]
    }))
  }

  setItems(listId: number, items: Item[]): void {
    this.update(state => state.map(list => list.id !== listId ? list : {
      ...list,
      items: items
    }))
  }
}
