/*
  Warnings:

  - You are about to drop the column `id_car` on the `cars` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "cars" DROP CONSTRAINT "cars_id_car_fkey";

-- AlterTable
ALTER TABLE "cars" DROP COLUMN "id_car";

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_id_fkey" FOREIGN KEY ("id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
