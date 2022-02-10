import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from '../models/comment.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CommentsApiService {
  constructor(private http: HttpClient) {}

  getComments(postId: number): Observable<IComment[]> {
    return this.http.get<IComment[]>(
      `${environment.BASE_URL}/posts/${postId}/comments`
    );
  }
}
