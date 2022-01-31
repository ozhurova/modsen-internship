import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { UIService } from '../../servises/ui.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  constructor(
      private uiService: UIService,
      public translate: TranslateService
  ) {}

  switchLang(lang: string): void {
    this.uiService.switchLang(lang);
  }
}
