import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from './core/servises/local-storage.service';
import { UIService } from './core/servises/ui.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public title = 'modsen-app';

  constructor(
      private localStorageService: LocalStorageService,
      private uiService: UIService
      ) { }

  ngOnInit(): void {
    const currentLang = this.localStorageService.getItem('language');
    if (currentLang) {
      this.uiService.switchLang(currentLang);
    }
  }
}
