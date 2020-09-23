import { TestBed } from '@angular/core/testing';

import { DoTeleportService } from './do-teleport.service';

describe('TeleportService', () => {
  let service: DoTeleportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoTeleportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
