import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { IPost } from 'src/app/core/models/post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss'],
  providers: [PostsService],
})
export class PostsPageComponent implements OnInit, OnDestroy {
  isDataAvailable = false;
  subscription: Subscription | null = null;

  constructor(public postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.init();
    this.subscription = this.postsService.posts$.subscribe((posts: IPost[]) => {
      if (posts !== []) {
        this.isDataAvailable = true;
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
