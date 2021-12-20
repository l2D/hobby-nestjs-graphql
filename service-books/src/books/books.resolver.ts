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
import { BookTypes } from '../book-types/book-types.model';
import { BookStatus } from '../book-status/book-status.model';
import { Category } from '../category/category.model';
import { Rating } from '../rating/rating.model';
import { PrismaService } from '../prisma/prisma.service';

// @InputType()
// class BookUniqueInput {
//   @Field()
//   title: string;
// }

@InputType()
class BookCreateInput {
  @Field(() => String, { nullable: true })
  Type?: string | null;

  @Field()
  title: string;

  @Field({ nullable: true })
  sub_title: string | null;

  @Field({ nullable: true })
  description: string | null;

  @Field(() => [String], { nullable: true })
  category?: string | null;

  @Field(() => [String], { nullable: true })
  tags?: string | null;

  @Field()
  author: string;

  @Field({ nullable: true })
  translator: string;

  @Field({ nullable: true })
  publisher: string;

  @Field({ nullable: true })
  isbn: string;

  @Field(() => String, { nullable: true })
  Rating: string | null;

  @Field({ nullable: true })
  BookStatus: string | null;

  @Field({ nullable: true })
  cover_img_url: string | null;

  @Field({ nullable: true })
  sub_img_url: string | null;

  @Field(() => Date)
  published_at: Date;

  @Field({ nullable: true })
  viewed: number | null;

  @Field({ nullable: true })
  chapters: number | null;

  @Field({ nullable: true })
  comments: number | null;
}

@InputType()
class BookCreateRalation {
  @Field(() => BookTypes, { nullable: true })
  Type: string | null;

  @Field(() => BookStatus, { nullable: true })
  Status: string | null;

  @Field(() => Rating, { nullable: true })
  Rating: string | null;

  @Field(() => [Category], { nullable: true })
  category: string | null;
}

@InputType()
class BookUpdateInput {
  // @Field({ nullable: true })
  // Type: string | null;

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  sub_title: string | null;

  @Field({ nullable: true })
  description: string | null;

  // @Field(() => [Category], { nullable: true })
  // category: string | null;

  @Field(() => [String], { nullable: true })
  tags?: string | null;

  @Field({ nullable: true })
  author: string;

  @Field({ nullable: true })
  translator: string;

  @Field({ nullable: true })
  publisher: string;

  @Field({ nullable: true })
  isbn: string;

  // @Field(() => Rating, { nullable: true })
  // Rating: string | null;

  // @Field({ nullable: true })
  // status: string | null;

  @Field({ nullable: true })
  cover_img_url: string | null;

  @Field({ nullable: true })
  sub_img_url: string | null;

  @Field(() => Date, { nullable: true })
  published_at: Date;

  @Field({ nullable: true })
  viewed: number | null;

  @Field({ nullable: true })
  chapters: number | null;

  @Field({ nullable: true })
  comments: number | null;
}

@Resolver(Book)
export class BookResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query(() => [Book], { description: `Get all books` })
  async allBooks(@Context() ctx) {
    console.log(`ctx`, ctx);
    return this.prismaService.book.findMany();
  }

  @Query(() => Book, { description: `Get a book by id` })
  async bookById(@Args('id') id: string) {
    return await this.prismaService.book.findUnique({
      where: { id },
      include: {
        Type: true,
        category: true,
        Rating: true,
        BookStatus: true,
      },
    });
  }

  @Mutation(() => Book, { description: `Create a new book` })
  async createBook(@Args('data') data: BookCreateInput, @Context() ctx) {
    const findDuplicated = await this.prismaService.book.findUnique({
      where: {
        title: data.title,
      },
    });
    if (findDuplicated) throw new Error('Book already exists');
    const { Type, category, Rating, BookStatus, ...body } = data;
    return await this.prismaService.book.create({
      data: {
        ...body,
      },
    });
  }

  @Mutation(() => Book, { description: `Update a book` })
  async updateBook(
    @Args('id') id: string,
    @Args('data') data: BookUpdateInput,
  ) {
    return await this.prismaService.book.update({
      where: { id },
      data,
    });
  }
}
