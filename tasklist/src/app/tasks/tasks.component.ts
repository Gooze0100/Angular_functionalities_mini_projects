import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  @Input() selected;
  tasks = [];
  isLoading = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.isLoading = true;
    this.http
      .get(
        'https://tasklist-85007-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
      )
      .subscribe((res) => {
        const tmp = [];
        for (const key in res) {
          const t2 = {
            ...res[key],
            id: key,
          };
          tmp.push({ ...res[key], id: key });
        }
        this.tasks = tmp;
        this.isLoading = false;
      });
  }

  deleteTask(id) {
    this.isLoading = true;
    this.http
      .delete(
        `https://tasklist-85007-default-rtdb.europe-west1.firebasedatabase.app/tasks/${id}.json`
      )
      .subscribe((res) => {
        this.getTasks();
        this.isLoading = false;
      });
  }

  deleteTasks() {
    this.isLoading = true;
    this.http
      .delete(
        `https://tasklist-85007-default-rtdb.europe-west1.firebasedatabase.app/tasks.json`
      )
      .subscribe((res) => {
        this.isLoading = false;
        this.tasks = [];
      });
  }

  editStatus(selected, id) {
    selected.disabled = false;
  }

  changeStatus(id, select) {
    this.isLoading = true;
    this.http
      .patch(
        `https://tasklist-85007-default-rtdb.europe-west1.firebasedatabase.app/tasks/${id}.json`,
        {
          select: select,
        }
      )
      .subscribe((res) => {
        this.getTasks();
        this.isLoading = false;
      });
  }

  onUpdate() {
    this.getTasks();
  }
}
