import { Component, OnInit } from '@angular/core';

import { UserApiService } from 'src/app/core/api/user.api.service';

import { IPost } from 'src/app/core/models/post.model';
import { IUser } from 'src/app/core/models/user.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
  providers: [PostsService],
})
export class PostsPageComponent implements OnInit {
  posts: IPost[] = [];

  constructor(
    public postsService: PostsService,
    private userApiService: UserApiService
  ) {}

  ngOnInit(): void {
    this.postsService.init();
    this.postsService.posts$.subscribe((posts: IPost[]) => {
      this.posts = posts;
      this.posts.forEach((post: IPost) =>
        this.userApiService
          .getUserById(post.userId)
          .subscribe((res: IUser) => (post.userName = res.name))
      );
    });
  }
}
