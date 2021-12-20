import { Test, TestingModule } from '@nestjs/testing';
import { BookStatusResolver } from './book-status.resolver';

describe('BookStatusResolver', () => {
  let resolver: BookStatusResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookStatusResolver],
    }).compile();

    resolver = module.get<BookStatusResolver>(BookStatusResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
