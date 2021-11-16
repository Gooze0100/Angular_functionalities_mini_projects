import { Component } from '@angular/core';
import { DataReceipts } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataReceipts],
})
export class AppComponent {
  title = 'receipts';
}
