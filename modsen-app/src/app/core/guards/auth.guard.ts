import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { IUser } from '../models/user.model';
import { UserService } from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private userService: UserService) {}

  canActivate(): boolean {
    let user: IUser | null = null;
    this.userService.user$.subscribe((res: IUser | null) => (user = res));
    return !!user;
  }
}
