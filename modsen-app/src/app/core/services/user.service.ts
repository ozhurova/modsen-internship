import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { UserApiService } from '../api/user.api.service';

import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly user: IUser | null = null;
  user$: BehaviorSubject<IUser | null>;

  constructor(
    private userApiService: UserApiService,
  ) {
    this.user$ = new BehaviorSubject<IUser | null>(this.user);
  }

  saveUser(user: IUser | null): void {
    this.user$.next(user);
  }
}
