import { Injectable } from '@angular/core';
import { LANG } from '../constants/lang.constants';
import { ELang } from '../models/lang.model';

const DEFAULT_LANG = ELang.EN;

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  getLang(): ELang {
    return localStorage.getItem(LANG) as ELang || DEFAULT_LANG;
  }

  setLang(lang: ELang): void {
    localStorage.setItem(LANG, lang);
  }
}
