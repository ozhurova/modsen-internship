import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  readonly user$ = new BehaviorSubject<IUser | null>(null);

  saveUser(user: IUser | null): void {
    this.user$.next(user);
  }
}
