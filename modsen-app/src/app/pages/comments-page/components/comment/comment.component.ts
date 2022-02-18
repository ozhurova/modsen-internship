import { Component, Input } from '@angular/core';
import { IComment } from 'src/app/core/models/comment.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent {
  @Input() comment: IComment | null = null;
  @Input() postId: number | null = null;
}
