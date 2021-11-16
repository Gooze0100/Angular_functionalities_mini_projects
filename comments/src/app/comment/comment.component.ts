import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Comments } from '../comment.model';
import { CommentsService } from '../comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css'],
})
export class CommentComponent implements OnInit, OnDestroy {
  public loading: boolean = false;
  public error: string;
  public errorSubscription: Subscription;
  public allComments: Comments[] = [];

  @ViewChild('firstName', { static: true })
  firstName: ElementRef<HTMLInputElement>;
  @ViewChild('lastName', { static: true })
  lastName: ElementRef<HTMLInputElement>;
  @ViewChild('rating', { static: true }) rating: ElementRef<HTMLSelectElement>;
  @ViewChild('comment', { static: true })
  comment: ElementRef<HTMLTextAreaElement>;
  constructor(private commentsService: CommentsService) {}

  ngOnInit(): void {
    this.errorSubscription = this.commentsService.error.subscribe((error) => {
      this.error = error;
    });
    this.loadComments();
  }

  ngOnDestroy() {
    this.errorSubscription.unsubscribe();
  }

  send(firstName: string, lastName: string, rating: number, comment: string) {
    this.commentsService
      .postComments(firstName, lastName, rating, comment)
      .subscribe(
        (res) => {
          this.loadComments();
          this.error = null;
        },
        (error) => {
          this.error = error.message;
          console.log(error);
        }
      );
    this.firstName.nativeElement.value = '';
    this.lastName.nativeElement.value = '';
    this.rating.nativeElement.value = 'Select rating...';
    this.comment.nativeElement.value = '';
  }

  loadComments() {
    this.loading = true;
    this.commentsService.getComments().subscribe(
      (data) => {
        this.allComments = data;
        this.loading = false;
      },
      (error) => {
        this.error = error.message;
        console.log(error);
      }
    );
  }
}
