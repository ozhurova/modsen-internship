import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { UserApiService } from '../api/user.api.service';

import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: IUser | null = null;
  userSub: BehaviorSubject<IUser | null>;

  constructor(
    private userApiService: UserApiService,
  ) {
    this.userSub = new BehaviorSubject<IUser | null>(this.user);
  }

  saveUser(user: IUser | null): void {
    this.userSub.next(user);
  }
}
