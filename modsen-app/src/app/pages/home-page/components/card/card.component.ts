import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ICard } from 'src/app/core/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() card: ICard | null = null;
  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    if (this.card) {
      this.card.title = this.translateService.instant('CARD.TITLE');
    }
  }
}
