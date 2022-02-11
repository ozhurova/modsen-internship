import { Component, Input } from '@angular/core';
import { UserApiService } from 'src/app/core/api/user.api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent {
  @Input() title = '';
  @Input() content = '';
  @Input() postId: number | null = null;
  @Input() userName = '';

  constructor(private userApiService: UserApiService) {}
}
