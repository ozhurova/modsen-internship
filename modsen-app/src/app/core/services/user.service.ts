import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserApiService } from '../api/user.api.service';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  readonly user$ = new BehaviorSubject<IUser | null>(null);

  constructor(
    private userApiService: UserApiService,
  ) {
  }

  saveUser(user: IUser | null): void {
    this.user$.next(user);
  }
}
