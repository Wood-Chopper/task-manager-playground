import {AbstractStore} from "./abstract.store";
import {TodoList} from "../model/types";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class TodoListsStore extends AbstractStore<TodoList[]> {

  list$ = this.select(lists => lists)

  constructor() {
    super([]);
  }

  initialize(initialLists: TodoList[]) {
    this.update(_ => initialLists);
  }

  createNewList(list: TodoList) {
    this.update(state => [...state, list]);
  }

  remove(id: number) {
    this.update(state => state.filter(list => list.id !== id));
  }
}
