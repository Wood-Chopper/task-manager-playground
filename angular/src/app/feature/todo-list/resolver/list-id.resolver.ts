import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {TodoList} from "../model/todo-list";
import {TodoListClient} from "../client/todo-list.client";

@Injectable({
  providedIn: 'root'
})
export class ListIdResolver implements Resolve<number> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): number {
    return Number(route.paramMap.get('id'));
  }
}
