import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CommentsService } from './comments.service';

@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.scss'],
})
export class CommentsPageComponent implements OnInit {
  constructor(
    public commentsService: CommentsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((res: Params) =>
      this.commentsService.init(+res['id'])
    );
  }
}
