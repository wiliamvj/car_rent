/*
  Warnings:

  - Added the required column `id_car` to the `cars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cars" ADD COLUMN     "id_car" TEXT NOT NULL;
