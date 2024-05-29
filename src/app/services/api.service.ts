import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TaskI} from "../interface/taskI";
import {originalUrl} from "../environment";

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<any> {
    return this.http.get(originalUrl + '/tasks');
  }

  addTask(task: TaskI): Observable<any> {
    console.log("adding task")
    return this.http.post(originalUrl + '/tasks', task);
  }
}
