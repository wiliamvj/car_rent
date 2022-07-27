/*
  Warnings:

  - You are about to drop the column `car_name` on the `cars` table. All the data in the column will be lost.
  - Added the required column `in_rent` to the `cars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `specs` to the `cars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `cars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `until_rent` to the `cars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cars" DROP COLUMN "car_name",
ADD COLUMN     "in_rent" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "specs" JSONB NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "until_rent" TIMESTAMP(3) NOT NULL;
