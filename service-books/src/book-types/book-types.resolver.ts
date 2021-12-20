import 'reflect-metadata';
import {
  Resolver,
  Query,
  Mutation,
  Args,
  Context,
  ResolveField,
  Root,
  InputType,
  Field,
} from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { Book } from '../books/books.model';
import { PrismaService } from '../prisma/prisma.service';
import { BookTypes } from './book-types.model';

@InputType()
class BookTypesInput {
  @Field()
  type: string;
}

@Resolver()
export class BookTypesResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query(() => BookTypes, { description: `Get a category by id` })
  async bookTypesById(@Args('id') id: number) {
    const parsedId = parseInt(id.toString(), 10);

    return await this.prismaService.bookType.findUnique({
      where: { id: parsedId },
      include: {
        Books: true,
      },
    });
  }

  @Query(() => [BookTypes], { description: `Get all book types` })
  async bookTypes(@Context() ctx) {
    return await this.prismaService.bookType.findMany({
      include: {
        Books: true,
      },
    });
  }

  @Mutation(() => BookTypes, { description: `Create a new book type` })
  async createBookType(@Args('data') data: BookTypesInput) {
    return await this.prismaService.bookType.create({
      data,
    });
  }

  @Mutation(() => BookTypes, { description: `Update a book type` })
  async updateBookType(
    @Args('id') id: number,
    @Args('data') data: BookTypesInput,
  ) {
    const parsedId = parseInt(id.toString(), 10);

    return await this.prismaService.bookType.update({
      where: { id: parsedId },
      data,
    });
  }
}
