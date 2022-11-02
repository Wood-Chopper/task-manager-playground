import {Component, Input} from '@angular/core';
import {TodoList} from "../../../../model/types";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input()
  list!: TodoList;
}
