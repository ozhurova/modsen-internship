import { Component } from '@angular/core';
import { ICard } from 'src/app/core/models/card.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  cards: ICard[] = [{ imgLink: 'assets/img/post-album.png', link: '/posts' }];
}
