import { Component } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { UIService } from '../../services/ui.service';

import { environment } from '../../../../environments/environment';
import { ELang } from '../../models/lang.model';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

 DEV = environment.DEV;
 ELang = Object.values(ELang);
 today = new Date();

  constructor(
      private uiService: UIService,
      public translate: TranslateService
  ) {}

  switchLang(lang: string): void {
    this.uiService.switchLang(lang);
  }
}
