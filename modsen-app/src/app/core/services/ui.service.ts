import { Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';
import { TranslateService } from '@ngx-translate/core';

import { ELang } from '../models/lang.model';
import { IAuthUser, IUser } from '../models/user.model';
import { UserApiService } from './userApi.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UIService {

  user: IUser | undefined;
  isAuth = false;
  authSub: BehaviorSubject<boolean>;
  userSub: BehaviorSubject<IUser | undefined>;

  constructor(
      private localStorageService: LocalStorageService,
      private translate: TranslateService,
      private userApiService: UserApiService,
      private router: Router
  ) {
    translate.addLangs(Object.values(ELang));
    this.userSub = new BehaviorSubject<IUser | undefined>(this.user || undefined);
    this.authSub = new BehaviorSubject<boolean>(this.isAuth); //TODO: localStorage ??
  }

  init(): void {
     const currentLang = this.localStorageService.getLang();
     this.switchLang(currentLang);
  }

  switchLang(lang: ELang | string): void {
    this.localStorageService.setLang(lang);
    this.translate.use(lang);
  }

  login(authUser: IAuthUser): void {
    this.userApiService.get().subscribe((users: IUser[]) => {
      const userFilter = users.find((i: IUser) => i.email === authUser.email && i.website === authUser.password);
      this.userSub.next(userFilter);
      if(userFilter){
        this.authSub.next(true);
      }
    });
  }

  logout(): void{
    this.userSub.next(undefined);
    this.authSub.next(false);
    this.router.navigate(['']);
  }
}
