import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsPageComponent } from './comments-page.component';
import { CommentsService } from './comments.service';
import { CommentComponent } from './components/comment/comment.component';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CommentsPageComponent, CommentComponent],
  imports: [CommonModule, MatCardModule, MatButtonModule],
  exports: [CommentsPageComponent],
  providers: [CommentsService],
})
export class CommentsPageModule {}
