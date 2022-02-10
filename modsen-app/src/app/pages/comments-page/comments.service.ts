import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommentsApiService } from 'src/app/core/api/comments.api.service';
import { IComment } from 'src/app/core/models/comment.model';

@Injectable()
export class CommentsService {
  readonly comments$ = new BehaviorSubject<IComment[]>([]);

  constructor(private commentsApiService: CommentsApiService) {}

  init(idPost: number): void {
    this.commentsApiService
      .getComments(idPost)
      .subscribe((comments: IComment[]) => this.comments$.next(comments));
  }
}
