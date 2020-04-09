import { TestBed } from '@angular/core/testing';

import { RecommendationServiceService } from './recommendation-service.service';

describe('RecommendationServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecommendationServiceService = TestBed.get(RecommendationServiceService);
    expect(service).toBeTruthy();
  });
});
