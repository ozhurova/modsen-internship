import { Component, OnInit } from '@angular/core';

import { PostsApiService } from 'src/app/core/api/posts.api.service';
import { IPost } from 'src/app/core/models/post.model';
import { PostsPageService } from './service/posts-page.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
  providers: [PostsPageService]
})
export class PostsPageComponent implements OnInit {

  constructor(
    private postsApiService: PostsApiService,
    private postsPageService: PostsPageService
  ) { }

  ngOnInit(): void {
    this.postsApiService.getPosts().subscribe((posts: IPost[]) => this.postsPageService.savePosts(posts));
  }
}
