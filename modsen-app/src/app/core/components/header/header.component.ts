import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { IUser } from '../../models/user.model';
import { UserApiService } from '../../api/user.api.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  currentUserName = '';
  subscription: Subscription | null = null;

  constructor(
    private userService: UserService,
    private userApiService: UserApiService
  ) {}

  ngOnInit(): void {
    this.subscription = this.userService.user$.subscribe(
      (user: IUser | null) => (this.currentUserName = user?.name || '')
    );
  }

  logout(): void {
    this.userApiService
      .logout()
      .subscribe(() => this.userService.saveUser(null));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }
}
