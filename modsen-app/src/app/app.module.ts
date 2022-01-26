import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomePageModule} from "./pages/home-page/home-page.module";
import {HeaderModule} from "./components/header/header.module";
import {FooterModule} from "./components/footer/footer.module";
import {ChooseTestsPageModule} from "./pages/choose-tests-page/choose-tests-page.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HomePageModule,
    HeaderModule,
    FooterModule,
    ChooseTestsPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
