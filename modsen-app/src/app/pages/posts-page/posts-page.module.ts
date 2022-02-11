import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsPageComponent } from './posts-page.component';
import { PostComponent } from './components/post/post.component';
import { PostsPageRoutingModule } from './posts-page-routing.module';
import { PostsService } from './posts.service';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [PostsPageComponent, PostComponent],
  imports: [
    CommonModule,
    PostsPageRoutingModule,
    MatCardModule,
    MatButtonModule,
    TranslateModule,
  ],
  exports: [PostsPageComponent],
  providers: [PostsService],
})
export class PostsPageModule {}
