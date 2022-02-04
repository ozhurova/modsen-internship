import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { PostsPageService } from 'src/app/pages/posts-page/service/posts-page.service';

import { environment } from 'src/environments/environment';
import { IPost } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsApiService {

  constructor(
    private http: HttpClient,
    private postsPageService: PostsPageService
  ) { }

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${environment.BASE_URL}/posts`);
  }
}
