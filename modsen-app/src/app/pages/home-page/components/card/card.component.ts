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
  title = '';

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.title = this.translate.instant('CARD.TITLE');

    this.translate.onLangChange.subscribe(() => {
      this.title = this.translate.instant('CARD.TITLE');
    });
  }
}
