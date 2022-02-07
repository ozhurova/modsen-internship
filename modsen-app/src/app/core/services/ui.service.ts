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
    translate.addLangs(Object.keys(ELang));
  }

  init(): void {
    const currentLang = this.localStorageService.getLang();
    this.translate.currentLang = currentLang.toUpperCase();
    this.switchLang(currentLang);
  }

  switchLang(lang: ELang): void {
    this.translate.use(lang);
    this.localStorageService.setLang(lang);
  }

  showError(err: Error): void {
    console.log(err);
  }
}
