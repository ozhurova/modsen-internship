import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './components/card/card.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HomePageComponent, CardComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    TranslateModule,
  ],
  exports: [HomePageComponent],
})
export class HomePageModule {}
