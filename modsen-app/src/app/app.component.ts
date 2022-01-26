import {Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'modsen-app';
  public currentLang = localStorage.getItem('language')
  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('ru');
  }
  ngOnInit(): void {
    if(this.currentLang){
      this.switchLang(this.currentLang)
    }
  }

  switchLang(lang: string):void {
    if(this.currentLang) {
      localStorage.removeItem('language');
    }
    localStorage.setItem('language', `${lang}`)
    this.translate.use(lang);
  }
}
