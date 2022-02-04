import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IPost } from 'src/app/core/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsPageService {

  posts: IPost[] = [];
  posts$: BehaviorSubject<IPost[]>;

  constructor() {
    this.posts$ = new BehaviorSubject<IPost[]>(this.posts);
  }

  savePosts(posts: IPost[]): void {
    console.log(posts);
    this.posts$.next(posts);
  }
}
