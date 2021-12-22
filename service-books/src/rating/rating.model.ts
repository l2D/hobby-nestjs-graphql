import 'reflect-metadata';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Book } from '../books/books.model';
import { IsString } from 'class-validator';

@ObjectType()
export class Rating {
  @Field(() => Int)
  id: number;

  @Field()
  @IsString()
  rating: string;

  @Field(() => [Book], { nullable: true })
  Books?: Book[];

  @Field(() => Date)
  created_at: Date;

  @Field(() => Date)
  updated_at: Date;
}
