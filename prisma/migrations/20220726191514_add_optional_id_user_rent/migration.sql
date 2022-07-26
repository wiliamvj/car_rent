-- DropForeignKey
ALTER TABLE "cars" DROP CONSTRAINT "cars_id_user_rent_fkey";

-- AlterTable
ALTER TABLE "cars" ALTER COLUMN "id_user_rent" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_id_user_rent_fkey" FOREIGN KEY ("id_user_rent") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
