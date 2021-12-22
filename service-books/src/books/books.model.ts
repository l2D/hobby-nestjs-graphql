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
  BookType?: BookTypes | null;

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

  @Field(() => [Category], {
    nullable: true,
    description: `Book's categories`,
  })
  category?: Category[] | null;

  @Field(() => [String], { nullable: true })
  @IsArray()
  tags?: string[] | null;

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

  @Field(() => String, { nullable: true })
  @IsString()
  @IsUrl()
  cover_img_url?: string | null;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsUrl()
  sub_img_url?: string | null;

  @Field(() => Date)
  published_at: Date;

  @Field(() => Int, { nullable: true })
  viewed?: number | null;

  @Field(() => Int, { nullable: true })
  chapters?: number | null;

  @Field(() => Int, { nullable: true })
  comments?: number | null;

  @Field(() => BookStatus, { nullable: true })
  bookStatus: string;

  @Field(() => Date)
  created_at: Date;

  @Field(() => Date)
  updated_at: Date;
}
