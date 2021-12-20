import { PrismaClient, Prisma } from '@prisma/client';
import BookServiceData from './BookServiceData.json';
import chalk from 'chalk';

const log = console.log;
const error = chalk.bold.red;
const warning = chalk.hex('#FFA500');
const info = chalk.hex('#00BFFF');
const success = chalk.green;

const prisma = new PrismaClient();

const BookType: Prisma.BookTypeCreateInput[] = BookServiceData.BookTypes;

const BookStatus: Prisma.BookStatusCreateInput[] = BookServiceData.Status;

const Category: Prisma.CategoryCreateInput[] = BookServiceData.Category;

const Rating: Prisma.RatingCreateInput[] = BookServiceData.Rating;

const Books: Prisma.BookCreateInput[] = BookServiceData.Books;

async function main() {
  log(warning(`Start seeding ...\n`));
  log(info(`Book service started ...\n`));

  for (const type of BookType) {
    const BookType = await prisma.bookType.create({
      data: type,
    });
    log(`Created BookType with id: ${success(BookType.id)}`);
  }

  for (const status of BookStatus) {
    const BookStatus = await prisma.bookStatus.create({
      data: status,
    });
    log(`Created BookStatus with id: ${success(BookStatus.id)}`);
  }

  for (const name of Category) {
    const Category = await prisma.category.create({
      data: name,
    });
    log(`Created Category with id: ${success(Category.id)}`);
  }

  for (const rate of Rating) {
    const Rating = await prisma.rating.create({
      data: rate,
    });
    log(`Created Rating with id: ${success(Rating.id)}`);
  }

  for (const book of Books) {
    const Book = await prisma.book.create({
      data: book,
    });
    log(`Created Book with id: ${success(Book.id)}`);
  }

  log(info(`\nEnd of Book service\n`));

  log(success(`Seeding finished.`));
}

main()
  .catch((e) => {
    log(error('Error! :>> ', e));
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
