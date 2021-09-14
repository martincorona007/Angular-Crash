import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable ,of} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { TASKS } from '../mock-task';
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apirURL = 'http://localhost:5000/tasks';
  constructor(private http: HttpClient) { }

  getTasks(): Observable <Task[]>{
    return this.http.get<Task[]>(this.apirURL);
  }
  deleteTask(task: Task):Observable<Task>{
    const url = `${this.apirURL}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}
