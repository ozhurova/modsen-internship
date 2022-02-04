/* eslint-disable  @typescript-eslint/no-unsafe-return */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'home-page', component: HomePageComponent, canActivate: [AuthGuard] },
  {
    path: 'posts-page', loadChildren: (): any => import('./pages/posts-page/posts-page.module')
      .then((m: any) => m.PostsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {
}
