import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('ApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports:[RouterTestingModule, HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });
});
