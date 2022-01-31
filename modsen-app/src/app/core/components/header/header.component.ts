import { Component, OnInit } from '@angular/core';
import { IUser } from '../../models/user.model';
import { UIService } from '../../services/ui.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isAuthorisation = false;
  currentUserName = '';

  constructor(
      private uiService: UIService,
      private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.uiService.authSub.subscribe((res: boolean) => this.isAuthorisation = res);
    this.uiService.userSub.subscribe((user: IUser | undefined) => {user ?
        this.currentUserName = user.name :
        this.currentUserName = '';}); //TODO get user from user.service
  }

    logout(): void {
      this.uiService.logout();
    }
}
