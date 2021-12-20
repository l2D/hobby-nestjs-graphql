import 'reflect-metadata';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import JSON from 'graphql-type-json';
import { IsArray, IsISBN, IsJSON, IsString, IsUrl } from 'class-validator';
import { Category } from '../category/category.model';
import { Rating } from '../rating/rating.model';
import { BookStatus } from '../book-status/book-status.model';
import { BookTypes } from 'src/book-types/book-types.model';

@ObjectType()
export class Book {
  @Field()
  id: string;

  @Field(() => BookTypes, { nullable: true })
  type?: string | null;

  @Field()
  title: string;

  @Field(() => String, {
    nullable: true,
    description: `Sub title of the book`,
  })
  @IsString()
  sub_title?: string | null;

  @Field(() => String, {
    nullable: true,
    description: `Description of the book`,
  })
  @IsString()
  description?: string | null;

  // @Field(() => [Category], {
  //   description: `Book title`,
  // })
  // category: Category[];

  @Field(() => [String], { nullable: true })
  @IsArray()
  tags?: string[];

  @Field()
  @IsString()
  author: string;

  @Field(() => String, {
    nullable: true,
    description: `Translator's name`,
  })
  @IsString()
  translator?: string | null;

  @Field(() => String, {
    nullable: true,
    description: `Publisher's name`,
  })
  @IsString()
  publisher?: string | null;

  @Field(() => String, {
    nullable: true,
    description: `ISBN of the book`,
  })
  @IsString()
  @IsISBN()
  isbn?: string | null;

  @Field(() => Rating, {
    nullable: true,
    description: `Rating of the book`,
  })
  rating?: string | null;

  @Field()
  @IsString()
  @IsUrl()
  cover_img_url?: string | null;

  @Field()
  @IsString()
  @IsUrl()
  sub_img_url?: string | null;

  @Field(() => Date)
  published_at: Date;

  @Field(() => Int)
  viewed?: number | null;

  @Field(() => Int)
  chapters?: number | null;

  @Field(() => Int)
  comments?: number | null;

  @Field(() => BookStatus)
  book_status: string;

  @Field(() => Date)
  created_at: Date;

  @Field(() => Date)
  updated_at: Date;
}
