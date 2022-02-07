import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsPageComponent } from './posts-page.component';
import { PostsPageService } from './posts-page.service';
import { PostsPageRoutingModule } from './posts-page-routing.module';
import { PostComponent } from './components/post/post.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [PostsPageComponent, PostComponent],
  imports: [
    CommonModule,
    PostsPageRoutingModule,
    MatCardModule,
    MatButtonModule,
  ],
  exports: [PostsPageComponent],
  providers: [PostsPageService],
})
export class PostsPageModule {}
