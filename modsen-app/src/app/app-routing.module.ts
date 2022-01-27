import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { ChooseTestsPageComponent } from './core/pages/choose-tests-page/choose-tests-page.component';

const routes: Routes = [

  { path: '', component: HomePageComponent },
  { path: 'choose-tests', component: ChooseTestsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
