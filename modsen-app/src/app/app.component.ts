import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IUser } from './core/models/user.model';
import { UIService } from './core/services/ui.service';
import { UserService } from './core/services/user.service';
import { IUserFacade, USER_FACADE } from './core/store/user/user.facade';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'modsen-app';
  subscription$: Subscription | null = null;

  constructor(
    private uiService: UIService,
    private userService: UserService,
    private router: Router,
    @Inject(USER_FACADE) public userFacade: IUserFacade
  ) {
    this.uiService.init();
  }

  ngOnInit(): void {
    this.subscription$ = this.userService.user$.subscribe(
      (user: IUser | null) => {
        if (user === null) {
          this.router.navigate(['']);
        }
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription$?.unsubscribe();
    this.subscription$ = null;
  }
}
