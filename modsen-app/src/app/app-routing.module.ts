import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseTestsPageComponent } from './pages/choose-tests-page/choose-tests-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';


const routes: Routes = [

  { path: '', component: LoginPageComponent },
  { path: 'choose-tests', component: ChooseTestsPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
