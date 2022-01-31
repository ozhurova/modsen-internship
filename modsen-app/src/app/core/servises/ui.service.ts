import { Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';
import { TranslateService } from '@ngx-translate/core';

import { ELang } from '../models/lang.model';

@Injectable({
  providedIn: 'root'
})
export class UIService {
  languages = Object.values(ELang);
  currentLang = this.localStorageService.getItem('language');

  constructor(
      private localStorageService: LocalStorageService,
      private translate: TranslateService
  ) {
    translate.addLangs(this.languages);
    translate.setDefaultLang(ELang.RU);
  }
  switchLang(lang: string): void {
    if (this.currentLang) {
      this.localStorageService.removeItem('language');
    }
    this.localStorageService.setItem('language', `${lang}`);
    this.translate.use(lang);
  }
}
