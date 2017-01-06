/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComicModalService } from './comic-modal.service';

describe('Service: ComicModal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComicModalService]
    });
  });

  it('should ...', inject([ComicModalService], (service: ComicModalService) => {
    expect(service).toBeTruthy();
  }));
});
