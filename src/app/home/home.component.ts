import {Component, OnInit} from '@angular/core';
import {ApiService} from "../services/api.service";
import {TaskI} from "../interface/taskI";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  protected tasks: TaskI[] = [];

  constructor(private apiService: ApiService) {
  }

  ngOnInit(): void {
  }

  getTasks() {
    this.apiService.getTasks().subscribe(data => {
      console.log(data);
      this.tasks = data;
    })
  }

  addTask(): void {
    const randomId = Math.floor(Math.random() * 1000) + 1;
    const task = {
      name: "Example " + randomId,
      description: "Task Description for Example" + randomId,
      completed: false
    };
    this.apiService.addTask(task).subscribe(data => {

    });
  }
}
