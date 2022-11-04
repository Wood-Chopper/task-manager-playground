import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {TodoList} from "../../model/types";
import {TodoListSelector} from "../../core/todo-list.selector";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  list$: Observable<TodoList>;

  constructor(activatedRoute: ActivatedRoute, private todoListSelector: TodoListSelector) {
    const listId = activatedRoute.snapshot.data['listId'];
    this.list$ = todoListSelector.selectList(listId);
  }
}
