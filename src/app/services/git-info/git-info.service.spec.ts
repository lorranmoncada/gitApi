/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GitInfoService } from './git-info.service';

describe('Service: GitInfo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitInfoService]
    });
  });

  it('should ...', inject([GitInfoService], (service: GitInfoService) => {
    expect(service).toBeTruthy();
  }));
});
