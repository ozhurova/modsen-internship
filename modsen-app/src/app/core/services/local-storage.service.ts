import { Injectable } from '@angular/core';
import { LANG } from '../constants/lang.constants';
import { ELang } from '../models/lang.model';

const DEFAULT_LANG = ELang.EN;

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  getLang(): string {
    return localStorage.getItem(LANG) || DEFAULT_LANG;
  }

  // TODO: Remove string
  setLang(lang: ELang | string): void {
    localStorage.setItem(LANG, lang);
  }
}
