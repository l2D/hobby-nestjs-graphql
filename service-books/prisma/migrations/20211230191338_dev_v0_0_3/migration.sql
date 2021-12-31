/*
  Warnings:

  - You are about to drop the column `book_type` on the `Book` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_book_type_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "book_type",
ADD COLUMN     "type" TEXT;

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_type_fkey" FOREIGN KEY ("type") REFERENCES "BookType"("type") ON DELETE SET NULL ON UPDATE CASCADE;
