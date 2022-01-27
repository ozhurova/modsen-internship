import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "./header.component";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    TranslateModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule {
}
