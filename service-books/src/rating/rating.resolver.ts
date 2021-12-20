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
import { Rating } from './rating.model';

@InputType()
class RatingInput {
  @Field()
  rating: string;
}

@Resolver()
export class RatingResolver {
  constructor(@Inject(PrismaService) private prismaService: PrismaService) {}

  @Query(() => Rating, { description: `Get a rating by id` })
  async ratingById(@Args('id') id: number) {
    const parsedId = parseInt(id.toString(), 10);

    return await this.prismaService.rating.findUnique({
      where: { id: parsedId },
      include: {
        Books: true,
      },
    });
  }

  @Query(() => [Rating], { description: `Get all ratings` })
  async ratings(@Context() ctx) {
    return await this.prismaService.rating.findMany({
      include: {
        Books: true,
      },
    });
  }

  @Mutation(() => Rating, { description: `Create a new rating` })
  async createRating(@Args('data') data: RatingInput) {
    return await this.prismaService.rating.create({
      data,
    });
  }

  @Mutation(() => Rating, { description: `Update a rating` })
  async updateRating(@Args('id') id: number, @Args('data') data: RatingInput) {
    const parsedId = parseInt(id.toString(), 10);

    return await this.prismaService.rating.update({
      where: { id: parsedId },
      data,
    });
  }
}
