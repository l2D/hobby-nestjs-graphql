import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { BookResolver } from './books/books.resolver';
import { CategoryResolver } from './category/category.resolver';
import { RatingResolver } from './rating/rating.resolver';
import { BookTypesResolver } from './book-types/book-types.resolver';
import { BookStatusResolver } from './book-status/book-status.resolver';

import { PrismaService } from './prisma/prisma.service';
import { join } from 'path';
import { GraphQLError, GraphQLFormattedError } from 'graphql';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      buildSchemaOptions: { dateScalarMode: 'timestamp' },
      formatError: (error: GraphQLError) => {
        console.log('error :>> ', JSON.stringify(error));
        const graphQLFormattedError: GraphQLFormattedError = {
          message:
            error?.extensions?.exception?.response?.message || error?.message,
          locations: error?.locations,
          path: error?.path,
          extensions: error?.extensions?.code,
        };
        return graphQLFormattedError;
      },
    }),
  ],
  controllers: [],
  providers: [
    PrismaService,
    BookResolver,
    CategoryResolver,
    RatingResolver,
    BookTypesResolver,
    BookStatusResolver,
  ],
})
export class AppModule {}
