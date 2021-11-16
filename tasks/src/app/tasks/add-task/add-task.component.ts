import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  visible = false;
  tasks;
  constructor(private tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasks = this.tasksService.tasks;
  }

  createTask(project, description) {
    this.tasksService.createTask(project.value, description.value);
    project.value = '';
    description.value = '';
  }
}
