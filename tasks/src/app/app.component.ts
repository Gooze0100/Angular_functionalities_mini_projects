import { Component } from '@angular/core';
import { TasksService } from './tasks.service';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, TasksService],
})
export class AppComponent {
  title = 'tasks';
}
