import { Component, OnInit } from '@angular/core';

import { IUser } from '../../models/user.model';

import { UserApiService } from '../../api/user.api.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUserName = '';

  constructor(
    private userService: UserService,
    private userApiService: UserApiService,
  ) {
  }

  ngOnInit(): void {
    this.userService.userSub.subscribe((user: IUser | null) =>
      user ? this.currentUserName = user.name : this.currentUserName = '');
  }

  logout(): void {
    this.userService.saveUser(null);
    this.userApiService.logout();
  }
}
