import { Component, OnInit } from '@angular/core';
import { IPost } from 'src/app/core/models/post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
  providers: [PostsService],
})
export class PostsPageComponent implements OnInit {
  dataPosts: IPost[] = [];

  constructor(public postsPageService: PostsService) {}

  ngOnInit(): void {
    this.postsPageService.init();
  }
}
