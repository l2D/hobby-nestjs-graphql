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
import { BookStatus } from './book-status.model';

@InputType()
class BookStatusInput {
  @Field()
  status: string;
}

@Resolver()
export class BookStatusResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query(() => BookStatus, { description: `Get a book status by id` })
  async bookStatusById(@Args('id') id: number) {
    const parsedId = parseInt(id.toString(), 10);

    return await this.prismaService.bookStatus.findUnique({
      where: { id: parsedId },
      include: {
        Books: true,
      },
    });
  }

  @Query(() => [BookStatus], { description: `Get all book statuses` })
  async bookStatuses(@Context() ctx) {
    return await this.prismaService.bookStatus.findMany({
      include: {
        Books: true,
      },
    });
  }

  @Mutation(() => BookStatus, { description: `Create a new book status` })
  async createBookStatus(@Args('data') data: BookStatusInput) {
    return await this.prismaService.bookStatus.create({
      data,
    });
  }

  @Mutation(() => BookStatus, { description: `Update a book status` })
  async updateBookStatus(
    @Args('id') id: number,
    @Args('data') data: BookStatusInput,
  ) {
    const parsedId = parseInt(id.toString(), 10);

    return await this.prismaService.bookStatus.update({
      where: { id: parsedId },
      data,
    });
  }
}
