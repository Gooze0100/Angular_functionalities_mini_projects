import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-dalyvavimas',
  templateUrl: './dalyvavimas.component.html',
  styleUrls: ['./dalyvavimas.component.css'],
})
export class DalyvavimasComponent implements OnInit {
  pridetiVisible = false;

  @ViewChild('inputVardas', { static: false }) studentVardasInput: ElementRef;
  @ViewChild('inputPavarde', { static: false }) studentPavardeInput: ElementRef;
  @Input() students;

  @Output() studentDalyvaujaEmitter = new EventEmitter<{
    name: string;
    surname: string;
  }>();

  @Output() studentNedalyvaujaEmitter = new EventEmitter<{
    name: string;
    surname: string;
  }>();

  constructor() {}
  ngOnInit(): void {}

  dalyvauja(name: string, surname: string, i: number) {
    this.students.splice(i, 1);
    this.studentDalyvaujaEmitter.emit({ name: name, surname: surname });
  }

  nedalyvauja(name: string, surname: string, i: number) {
    this.students.splice(i, 1);
    this.studentNedalyvaujaEmitter.emit({ name: name, surname: surname });
  }

  addStudent() {
    this.students.push({
      name: this.studentVardasInput.nativeElement.value,
      surname: this.studentPavardeInput.nativeElement.value,
    });
    this.studentVardasInput.nativeElement.value = '';
    this.studentPavardeInput.nativeElement.value = '';
  }
}
