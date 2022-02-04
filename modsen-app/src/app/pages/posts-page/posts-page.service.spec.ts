import { TestBed } from '@angular/core/testing';

import { PostsPageService } from './posts-page.service.js';

describe('PostsPageService', () => {
  let service: PostsPageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsPageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
