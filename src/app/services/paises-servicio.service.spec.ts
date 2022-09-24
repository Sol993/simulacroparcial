import { TestBed } from '@angular/core/testing';

import { PaisesServicioService } from './paises-servicio.service';

describe('PaisesServicioService', () => {
  let service: PaisesServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaisesServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
