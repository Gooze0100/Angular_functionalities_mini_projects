import { Component, OnInit } from '@angular/core';
import { studentaiData } from './studentai.data';

@Component({
  selector: 'app-studentai',
  templateUrl: './studentai.component.html',
  styleUrls: ['./studentai.component.css'],
})
export class StudentaiComponent implements OnInit {
  studentaiData = studentaiData;

  studentaiDalyvauja = [];
  studentaiNedalyvauja = [];

  constructor() {}
  ngOnInit(): void {}

  onDalyvauja(dalyvauja: { name: string; surname: string }) {
    this.studentaiDalyvauja.push(`${dalyvauja.name} ${dalyvauja.surname}`);
  }

  onNedalyvauja(nedalyvauja: { name: string; surname: string }) {
    this.studentaiNedalyvauja.push(
      `${nedalyvauja.name} ${nedalyvauja.surname}`
    );
  }

  addGroup(
    groupTitle: HTMLInputElement,
    groupLocation: HTMLInputElement,
    groupDate: HTMLInputElement
  ) {
    this.studentaiData.push({
      group: groupTitle.value,
      location: groupLocation.value,
      start_date: groupDate.value,
      students: [],
    });
    groupTitle.value = '';
    groupDate.value = '';
    groupLocation.value = '';
  }
}
