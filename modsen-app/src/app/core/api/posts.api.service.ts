import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IPost } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsApiService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<IPost[]> {
    return this.http.get<IPost[]>(`${environment.BASE_URL}/posts`);
  }

  getPostsByPages(page: number, amount: number): Observable<IPost[]> {
    return this.http.get<IPost[]>(
      `${environment.BASE_URL}/posts?_page=${page}&_limit=${amount}`
    );
  }
}
