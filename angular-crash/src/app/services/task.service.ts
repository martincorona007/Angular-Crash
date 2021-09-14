import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable ,of} from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { TASKS } from '../mock-task';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
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
  updateTaskReminder(task: Task): Observable<Task>{
    const url = `${this.apirURL}/${task.id}`;
    return this.http.put<Task>(url,task,httpOptions);

  }
  addTask(task: Task): Observable<Task>{
    return this.http.post<Task>(this.apirURL, task,httpOptions)
  }
}
