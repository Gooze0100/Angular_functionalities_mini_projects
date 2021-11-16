import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements OnInit {
  @Output() updateTasks = new EventEmitter();
  taskName = '';
  task = '';
  select = 'Select status...';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  postTask() {
    if (
      this.taskName !== '' &&
      this.task !== '' &&
      this.select !== 'Select status...'
    ) {
      const tasks = {
        taskName: this.taskName,
        task: this.task,
        select: this.select,
      };

      this.http
        .post(
          'https://tasklist-85007-default-rtdb.europe-west1.firebasedatabase.app/tasks.json',
          tasks
        )
        .subscribe((res) => {
          this.updateTasks.emit();
          this.taskName = '';
          this.task = '';
          this.select = '';
        });
    }
  }

  emptyFields() {
    this.taskName = '';
    this.task = '';
    this.select = 'Select status...';
  }
}
