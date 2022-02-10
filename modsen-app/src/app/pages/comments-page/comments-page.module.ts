import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsPageComponent } from './comments-page.component';
import { CommentsService } from './comments.service';

@NgModule({
  declarations: [CommentsPageComponent],
  imports: [CommonModule],
  exports: [CommentsPageComponent],
  providers: [CommentsService],
})
export class CommentsPageModule {}
