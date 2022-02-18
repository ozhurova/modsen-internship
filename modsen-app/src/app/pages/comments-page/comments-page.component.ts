import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { CommentsService } from './comments.service';

@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.scss'],
})
export class CommentsPageComponent implements OnInit, OnDestroy {
  private subscription$: Subscription | null = null;

  constructor(
    public commentsService: CommentsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.subscription$ = this.route.queryParams.subscribe((res: Params) =>
      this.commentsService.init(+res['id'])
    );
  }

  ngOnDestroy(): void {
    this.subscription$?.unsubscribe();
  }
}
