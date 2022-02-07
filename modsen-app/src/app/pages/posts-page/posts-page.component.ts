import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/core/models/post.model';
import { PostsPageService } from './posts-page.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
  providers: [PostsPageService]
})
export class PostsPageComponent implements OnInit {
  dataPosts: IPost[] = [];

  constructor(
    public postsPageService: PostsPageService
  ) {
  }

  ngOnInit(): void {
    this.postsPageService.init();
  }
}
