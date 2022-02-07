import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PostsApiService } from 'src/app/core/api/posts.api.service';
import { IPost } from '../../core/models/post.model';

@Injectable()
export class PostsPageService {

  readonly posts$ = new BehaviorSubject<IPost[]>([]);

  constructor(
    private postsApiService: PostsApiService
  ) {
  }

  init(): void {
    this.postsApiService.getPosts().subscribe((posts: IPost[]) => this.posts$.next(posts));
  }

  savePosts(posts: IPost[]): void {
    this.posts$.next(posts);
  }
}
