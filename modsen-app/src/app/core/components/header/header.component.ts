import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

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
  private unsubscribe$: Subject<boolean> = new Subject();

  constructor(
    private userService: UserService,
    private userApiService: UserApiService
  ) {}

  ngOnInit(): void {
    this.userService.user$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(
        (user: IUser | null) => (this.currentUserName = user?.name || '')
      );
  }

  logout(): void {
    this.userApiService
      .logout()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(() => this.userService.saveUser(null));
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(true);
    this.unsubscribe$.complete();
  }
}
