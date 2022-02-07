import { Component } from '@angular/core';

import { environment } from '../../../../environments/environment';
import { ELang } from '../../models/lang.model';

import { UIService } from '../../services/ui.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  DEV = environment.DEV;
  ELang = ELang;
  today = new Date();
  selectedLang?: ELang;

  constructor(
    public uiService: UIService,
    public translate: TranslateService
  ) {
  }

  switchLang(): void {
    if (this.selectedLang) {
      this.uiService.switchLang(this.selectedLang);
    }
  }
}
