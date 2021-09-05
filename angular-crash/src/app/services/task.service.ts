import { Injectable } from '@angular/core';
import { TASKS } from 'src/app/mock-task';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  getTasks(): Task []{
    return TASKS
  }
}
