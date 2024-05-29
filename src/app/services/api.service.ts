import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TaskI} from "../interface/taskI";

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<any> {
    return this.http.get('http://localhost:8080/busyBox/api/v1/tasks');
  }

  addTask(task: TaskI): Observable<any> {
    console.log("adding task")
    return this.http.post('http://localhost:8080/busyBox/api/v1/tasks', task);
  }
}
