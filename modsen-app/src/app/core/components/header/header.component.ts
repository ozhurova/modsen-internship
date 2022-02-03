import { Component, OnDestroy, OnInit } from '@angular/core';

import { IUser } from '../../models/user.model';

import { UserApiService } from '../../api/user.api.service';
import { UserService } from '../../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentUserName = '';
  subscription: Subscription | null = null;

  constructor(
    private userService: UserService,
    private userApiService: UserApiService,
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.userService.user$.subscribe((user: IUser | null) =>
      this.currentUserName = user?.name || '');
  }

  logout(): void {
    this.userService.saveUser(null);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
}
