import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from '../models/user.model';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router,
              private userService: UserService) {
  }

  canActivate(): Observable<boolean> | boolean {
    let result: IUser | null = null;

    this.userService.userSub.subscribe((res: IUser | null) => result = res);

    if (result) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }
}
