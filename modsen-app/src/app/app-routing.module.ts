import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseTestsPageComponent } from './pages/choose-tests-page/choose-tests-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';


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
