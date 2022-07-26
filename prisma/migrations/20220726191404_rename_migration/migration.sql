/*
  Warnings:

  - Added the required column `id_user_rent` to the `cars` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "cars" DROP CONSTRAINT "cars_id_fkey";

-- AlterTable
ALTER TABLE "cars" ADD COLUMN     "id_user_rent" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_id_user_rent_fkey" FOREIGN KEY ("id_user_rent") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
