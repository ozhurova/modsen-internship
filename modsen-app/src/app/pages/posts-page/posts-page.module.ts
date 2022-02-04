import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsPageComponent } from './posts-page.component';
import { PostsPageRoutingModule } from './posts-page-routing.module';

@NgModule({
  declarations: [PostsPageComponent],
  imports: [
    CommonModule,
    PostsPageRoutingModule
  ],
  exports: [PostsPageComponent],
})
export class PostsPageModule { }
