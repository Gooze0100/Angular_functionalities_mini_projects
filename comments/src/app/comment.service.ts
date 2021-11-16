import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comments } from './comment.model';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CommentsService {
  constructor(private http: HttpClient) {}
  error = new Subject<string>();

  getComments() {
    return this.http
      .get<{ [key: string]: Comments }>(
        'https://taskcomments-default-rtdb.europe-west1.firebasedatabase.app/comments.json'
      )
      .pipe(
        map((response) => {
          const comments: Comments[] = [];
          for (const key in response) {
            comments.push({ ...response[key], id: key });
          }
          return comments;
        })
      );
  }

  postComments(
    firstName: string,
    lastName: string,
    rating: number,
    comment: string
  ) {
    const comments: Comments = {
      firstName: firstName,
      lastName: lastName,
      rating: rating,
      comment: comment,
    };

    console.log(firstName, lastName, rating, comment);

    return this.http.post(
      'https://taskcomments-default-rtdb.europe-west1.firebasedatabase.app/comments.json',
      comments
    );
  }
}
