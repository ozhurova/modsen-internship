import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss'],
})
export class CommentComponent {
  @Input() title = '';
  @Input() email = '';
  @Input() content = '';
  @Input() postId: number | null = null;
}
