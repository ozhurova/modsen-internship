import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserApiService {
    baseURL = 'https://jsonplaceholder.typicode.com/users';

    constructor(
        private http: HttpClient,
    ) {}

    get(): Observable<any> {
        return this.http.get<any>(this.baseURL);
    }
}
