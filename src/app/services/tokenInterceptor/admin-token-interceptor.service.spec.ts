import { TestBed } from '@angular/core/testing';

import { AdminTokenInterceptorService } from './admin-token-interceptor.service';

describe('AdminTokenInterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdminTokenInterceptorService = TestBed.get(AdminTokenInterceptorService);
    expect(service).toBeTruthy();
  });
});
