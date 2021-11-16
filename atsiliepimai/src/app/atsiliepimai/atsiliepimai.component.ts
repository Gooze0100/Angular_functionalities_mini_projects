import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atsiliepimai',
  templateUrl: './atsiliepimai.component.html',
  styleUrls: ['./atsiliepimai.component.css'],
})
export class AtsiliepimaiComponent implements OnInit {
  atsiliepimai = [];

  isLoading = false;

  getAtsiliepimai() {
    this.isLoading = true;
    this.http
      .get(
        'https://atsiliepimai-7aa29-default-rtdb.europe-west1.firebasedatabase.app/atsiliepimai.json'
      )
      .subscribe((res) => {
        console.log(res);
        const tmp = [];
        for (const key in res) {
          const t2 = {
            ...res[key],
            id: key,
          };
          tmp.push({
            ...res[key],
            id: key,
          });
        }
        this.atsiliepimai = tmp;
        console.log(this.atsiliepimai);
        this.isLoading = false;
      });
  }

  deleteAtsiliepimai() {
    this.isLoading = true;
    this.http
      .delete(
        'https://atsiliepimai-7aa29-default-rtdb.europe-west1.firebasedatabase.app/atsiliepimai.json'
      )
      .subscribe((res) => {
        this.isLoading = false;
        this.atsiliepimai = [];
      });
  }

  deleteAtsiliepimas(id) {
    console.log(id);
    this.isLoading = true;
    this.http
      .delete(
        `https://atsiliepimai-7aa29-default-rtdb.europe-west1.firebasedatabase.app/atsiliepimai/${id}.json`
      )
      .subscribe((res) => {
        this.getAtsiliepimai();
        this.isLoading = false;
      });
  }

  anonymous(id: string) {
    this.isLoading = true;
    this.http
      .patch(
        `https://atsiliepimai-7aa29-default-rtdb.europe-west1.firebasedatabase.app/atsiliepimai/${id}.json`,
        {
          vardas: 'Anonimous',
          papildomai: 'anonimas',
        }
      )
      .subscribe((res) => {
        this.getAtsiliepimai();
      });
  }

  onUpdate() {
    this.getAtsiliepimai();
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getAtsiliepimai();
  }
}
