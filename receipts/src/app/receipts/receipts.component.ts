import { Component, OnInit } from '@angular/core';
import { DataReceipts } from '../data.service';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.css'],
})
export class ReceiptsComponent implements OnInit {
  receipts;
  constructor(private dataReceipts: DataReceipts) {}

  ngOnInit(): void {
    this.receipts = this.dataReceipts.receipts;
  }
}
