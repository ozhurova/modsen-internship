import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, TranslateModule, FormsModule, ReactiveFormsModule],
  exports: [FooterComponent],
})
export class FooterModule {}
