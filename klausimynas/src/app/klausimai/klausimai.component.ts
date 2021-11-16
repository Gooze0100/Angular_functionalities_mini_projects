import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-klausimai',
  templateUrl: './klausimai.component.html',
  styleUrls: ['./klausimai.component.css'],
})
export class KlausimaiComponent implements OnInit {
  public klausimai;
  public ak: number = 0;
  public teisingi: number = 0;
  public viso: number = 0;
  public pabaiga = false;
  public countDownObs: Observable<number>;
  public laikas: number = 0;
  private subscription: Subscription;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.klausimai = this.dataService.klausimai;
    this.viso = this.klausimai.length;
    this.recursion();
  }

  private recursion() {
    this.countDownObservable();
    this.subscription = this.countDownObs.subscribe(
      (count: number) => {
        console.log(count);
        this.laikas = count;
      },
      (error) => {
        console.log(error);
      },
      () => {
        this.speti(-1);
        if (!this.pabaiga) {
          this.recursion();
        }
      }
    );
  }

  private countDownObservable() {
    this.countDownObs = new Observable((observer) => {
      let count: number = 5;
      setInterval(() => {
        if (count < 0) {
          observer.complete();
        } else {
          observer.next(count);
        }
        count--;
      }, 1000);
    });
  }

  speti(i: number) {
    if (this.klausimai[this.ak].teisingas === i) {
      this.teisingi++;
    }
    if (this.ak < this.viso - 1) {
      this.ak++;
    } else {
      this.pabaiga = true;
    }
    if (i !== -1) {
      this.subscription.unsubscribe();
      if (!this.pabaiga) {
        this.laikas = 5;
        this.recursion();
      }
    }
  }
}
