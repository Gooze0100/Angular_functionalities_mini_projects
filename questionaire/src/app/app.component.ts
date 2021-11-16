import { Component } from '@angular/core';
import { DataQuestions } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataQuestions],
})
export class AppComponent {
  title = 'questionaire';
}
