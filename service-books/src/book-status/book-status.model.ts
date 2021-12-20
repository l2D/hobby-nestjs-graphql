import 'reflect-metadata';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Book } from '../books/books.model';
import { IsString } from 'class-validator';

@ObjectType()
export class BookStatus {
  @Field(() => Int)
  id: number;

  @Field()
  @IsString()
  status: string;

  @Field(() => [Book])
  Books: [Book];

  @Field(() => Date)
  created_at: Date;

  @Field(() => Date)
  updated_at: Date;
}
