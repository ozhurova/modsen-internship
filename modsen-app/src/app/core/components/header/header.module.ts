import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    TranslateModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
