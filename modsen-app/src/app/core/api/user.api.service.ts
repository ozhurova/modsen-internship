import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { BehaviorSubject, map, Observable } from 'rxjs';

import { IUser } from '../models/user.model';
import { environment } from '../../../environments/environment';

import { UIService } from '../services/ui.service';

@Injectable({
  providedIn: 'root'
})
export class UserApiService {
  user: IUser | null = null;
  userSub: BehaviorSubject<IUser | null>;

  constructor(
    private http: HttpClient,
    private router: Router,
    private uiService: UIService,
  ) {
    this.userSub = new BehaviorSubject<IUser | null>(this.user || null);
  }

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${environment.BASE_URL}/users`);
  }

  login(email: string, password: string): Observable<IUser | null> {
    return this.getUsers().pipe(map(
      (users: IUser[]) =>
        users.find((i: IUser) => i.email === email && i.website === password) || null,
      (err: Error) =>
        this.uiService.showError(err)
    ));
  }

  logout(): void {
    this.router.navigate(['']);
  }
}
