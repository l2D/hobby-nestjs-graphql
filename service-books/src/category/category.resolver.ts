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
// import { BookTypes } from '../book-types/book-types.model';
// import { BookStatus } from '../book-status/book-status.model';
import { Category } from '../category/category.model';
// import { Rating } from '../rating/rating.model';
// import { Post } from './post';
// import { User } from './user';
import { PrismaService } from '../prisma/prisma.service';

@InputType()
class CategoryInput {
  @Field()
  category: string;
}

@Resolver(Category)
export class CategoryResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  //   @ResolveField()
  //   async category(
  //     @Root() category: Category,
  //     @Context() ctx,
  //   ): Promise<Category | null> {
  //     return await this.prismaService.category.findUnique({
  //       where: { id: category.id },
  //       include: {
  //         Books: true,
  //       },
  //     });
  //   }

  @Query(() => Category, { description: `Get a category by id` })
  async categoryById(@Args('id') id: number) {
    const parsedId = parseInt(id.toString(), 10);

    return await this.prismaService.category.findUnique({
      where: { id: parsedId },
      include: {
        Books: true,
      },
    });
  }

  @Query(() => [Category], { description: `Get all categories` })
  async categories(@Context() ctx) {
    return await this.prismaService.category.findMany({
      include: {
        Books: true,
      },
    });
  }

  @Mutation(() => Category, { description: `Create a new category` })
  async createCategory(@Args('data') data: CategoryInput) {
    return await this.prismaService.category.create({
      data,
    });
  }

  @Mutation(() => Category, { description: `Update a category` })
  async updateCategory(
    @Args('id') id: number,
    @Args('data') data: CategoryInput,
  ) {
    const parsedId = parseInt(id.toString(), 10);

    return await this.prismaService.category.update({
      where: { id: parsedId },
      data,
    });
  }
}
