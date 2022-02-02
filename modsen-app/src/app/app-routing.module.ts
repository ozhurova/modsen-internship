import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseTestsPageComponent } from './pages/choose-tests-page/choose-tests-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [

  { path: '', component: LoginPageComponent },
  { path: 'choose-tests', component: ChooseTestsPageComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {
}
