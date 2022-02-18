import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ICard } from 'src/app/core/models/card.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() card: ICard | null = null;
  title = '';
  private subscription$: Subscription | null = null;

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.title = this.translate.instant('CARD.TITLE');

    this.subscription$ = this.translate.onLangChange.subscribe(() => {
      this.title = this.translate.instant('CARD.TITLE');
    });
  }

  ngOnDestroy(): void {
    this.subscription$?.unsubscribe();
  }
}
