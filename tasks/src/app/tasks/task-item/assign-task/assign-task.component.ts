import { Component, Input, OnInit } from '@angular/core';
import { TasksService } from 'src/app/tasks.service';
import { UserService } from 'src/app/users.service';

@Component({
  selector: 'app-assign-task',
  templateUrl: './assign-task.component.html',
  styleUrls: ['./assign-task.component.css'],
})
export class AssignTaskComponent implements OnInit {
  @Input() taskProject;
  @Input() taskDescription;
  @Input() indexForTask;

  users;
  tasks;

  constructor(
    private usersService: UserService,
    private tasksService: TasksService
  ) {}

  ngOnInit(): void {
    this.users = this.usersService.users;
    this.tasks = this.tasksService.tasks;
  }

  addTaskToUser(user) {
    this.usersService.addTaskToUser(
      user.value,
      this.taskProject,
      this.taskDescription
    );
    this.tasks.splice(this.indexForTask, 1);
  }
}
