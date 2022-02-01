import { Injectable } from '@angular/core';

import { LocalStorageService } from './local-storage.service';
import { TranslateService } from '@ngx-translate/core';

import { ELang } from '../models/lang.model';

@Injectable({
  providedIn: 'root'
})
export class UIService {

  constructor(
    private localStorageService: LocalStorageService,
    private translate: TranslateService,
  ) {
    translate.addLangs(Object.values(ELang));
  }

  init(): void {
    const currentLang = this.localStorageService.getLang();
    this.switchLang(currentLang);
  }

  switchLang(lang: ELang | string): void {
    this.localStorageService.setLang(lang);
    this.translate.use(lang);
  }

  showError(err: Error): void {
    console.log(err);
  }
}
