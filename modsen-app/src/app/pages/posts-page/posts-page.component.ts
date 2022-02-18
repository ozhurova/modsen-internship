import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
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
  posts: IPost[] = [];
  private subscription$: Subscription | null = null;
  private numberPage = 0;
  private amountPosts = 10;
  private statusPanding = false;
  private limit = false;

  constructor(public postsService: PostsService) {}

  ngOnInit(): void {
    this.postsService.init(++this.numberPage, this.amountPosts);
    this.workWithPosts();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    if (!this.statusPanding && this.bottomReached() && !this.limit) {
      this.statusPanding = true;
      this.postsService.init(++this.numberPage, this.amountPosts);
    }
  }

  bottomReached(): boolean {
    return (
      window.scrollY === document.body.scrollHeight - document.body.clientHeight
    );
  }

  workWithPosts(): void {
    this.subscription$ = this.postsService.posts$.subscribe(
      (posts: IPost[]) => {
        if (posts.length < this.amountPosts && this.numberPage > 1) {
          this.limit = true;
        }
        this.posts = [...this.posts, ...posts];
        this.statusPanding = false;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription$?.unsubscribe();
  }
}
