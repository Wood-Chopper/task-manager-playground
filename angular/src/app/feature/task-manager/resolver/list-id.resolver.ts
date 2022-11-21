import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable} from 'rxjs';
import {TaskList} from "../model/task-list";
import {TaskManagerClient} from "../client/task-manager.client";

@Injectable({
  providedIn: 'root'
})
export class ListIdResolver implements Resolve<number> {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): number {
    return Number(route.paramMap.get('id'));
  }
}
