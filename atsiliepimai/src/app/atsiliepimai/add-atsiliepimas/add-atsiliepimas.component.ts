import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-atsiliepimas',
  templateUrl: './add-atsiliepimas.component.html',
  styleUrls: ['./add-atsiliepimas.component.css'],
})
export class AddAtsiliepimasComponent implements OnInit {
  @Output() updateAtsiliepimai = new EventEmitter();
  atsiliepimai = [];
  vardas = '';
  atsiliepimas = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getAtsiliepimai() {
    this.http
      .get(
        'https://atsiliepimai-7aa29-default-rtdb.europe-west1.firebasedatabase.app/atsiliepimai.json'
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  postAtsiliepimas() {
    const a = {
      vardas: this.vardas,
      atsiliepimas: this.atsiliepimas,
    };

    this.http
      .post(
        'https://atsiliepimai-7aa29-default-rtdb.europe-west1.firebasedatabase.app/atsiliepimai.json',
        a
      )
      .subscribe((res) => {
        console.log(res);
        this.updateAtsiliepimai.emit();
        this.vardas = '';
        this.atsiliepimas = '';
      });
  }
}
