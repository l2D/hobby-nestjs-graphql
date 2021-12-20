import { Test, TestingModule } from '@nestjs/testing';
import { BookTypesResolver } from './book-types.resolver';

describe('BookTypesResolver', () => {
  let resolver: BookTypesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookTypesResolver],
    }).compile();

    resolver = module.get<BookTypesResolver>(BookTypesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
