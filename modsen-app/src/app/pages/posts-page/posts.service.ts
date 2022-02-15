import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PostsApiService } from 'src/app/core/api/posts.api.service';
import { IPost } from '../../core/models/post.model';

@Injectable()
export class PostsService {
  readonly posts$ = new BehaviorSubject<IPost[]>([]);

  constructor(private postsApiService: PostsApiService) {}

  init(page: number, amount: number): void {
    this.postsApiService
      .getPostsByPages(page, amount)
      .subscribe((posts: IPost[]) => this.posts$.next(posts));
  }
}
