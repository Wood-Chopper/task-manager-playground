import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {TodoList} from "../../model/todo-list";
import {TodoListService} from "../../service/todo-list.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  list$: Observable<TodoList>;
  newItemName = '';

  constructor(activatedRoute: ActivatedRoute,
              private todoListService: TodoListService) {
    const listId = activatedRoute.snapshot.data['listId'];
    this.list$ = todoListService.todoList$(listId);
  }

  createNewItem(listId: number): void {
    this.todoListService.addItem(listId, this.newItemName);
    this.newItemName = '';
  }

  sort(listId: number): void {
    this.todoListService.sort(listId);
  }
}
