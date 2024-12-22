import { TestBed } from '@angular/core/testing';

import { LivroIndicacaoService } from './livro-indicacao.service';

describe('LivroIndicacaoService', () => {
  let service: LivroIndicacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LivroIndicacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
