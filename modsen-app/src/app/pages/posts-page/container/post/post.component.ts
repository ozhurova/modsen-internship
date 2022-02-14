import { Component, Input, OnChanges, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserApiService } from 'src/app/core/api/user.api.service';
import { IPost } from 'src/app/core/models/post.model';
import { IUser } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnChanges, OnDestroy {
  @Input() userName = '';
  @Input() post: IPost | null = null;
  subscription: Subscription | null = null;

  constructor(private userApiService: UserApiService) {}

  ngOnChanges(): void {
    if (this.post?.userId) {
      this.subscription = this.userApiService
        .getUserById(this.post.userId)
        .subscribe((res: IUser) => (this.userName = res.name));
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
